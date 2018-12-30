<template>
  <div class="container">
    <div class="navbar">
      <div class="navbar-brand">
        <img
          src="images/logo.jpg"
          class="logo"
        >
        YouTube
      </div>

      <form class="form-inline my-2 my-lg-0">
        <input
          v-model="searchQuery"
          class="form-control mr-sm-2"
          type="search"
          placeholder="Type video name"
          aria-label="Search"
        >
        <button
          class="btn btn-outline-danger my-2 my-sm-0"
          type="submit"
          @click.prevent="search"
        >
          {{ searchLoading ? 'Loading...' : 'Search' }}
        </button>

        <div
          v-show="searchResults.length && showResults"
          class="list-group search-results"
        >
          <div
            v-for="video in searchResults"
            :key="video.id"
            class="list-group-item list-group-item-action search-result"
            @click="selectVideo(video)"
          >
            <img :src="video.thumbnails.medium.url">
            {{ video.title }}
          </div>
        </div>
      </form>
    </div>
    <div class="row mt-5">
      <div class="col-md-3">

        <h5>Watch history</h5>

        <div
          v-show="history.length"
          class="list-group"
        >
          <div
            v-for="(historyItem, index) in history"
            :key="historyItem._id"
            class="list-group-item list-group-item-action search-result"
            @click="selectVideo(historyItem, false)"
          >
            <img :src="historyItem.thumbnails.medium.url">
            {{ historyItem.title }}
            <span class="btn btn-sm btn-outline-danger float-right"
                  @click.stop="deleteHistoryItem(index)">x</span>
          </div>
        </div>
        <p class="text-secondary"
              v-show="!history.length"
        >
          {{ historyLoading ? 'Loading...' : 'History is empty' }}
        </p>
      </div>
      <div class="col-md-9">
        <youtube v-if="current"
                 :video-id="current.id"
        ></youtube>
        <p class="text-center text-secondary"
              v-else>
          No video selected
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    searchQuery: '',
    searchLoading: false,
    searchResults: [],
    historyLoading: true,
    history: [],
    current: null,
    showResults: false
  }),
  created () {
    this.$http.get('/videos/history').then(response => {
      this.history = response.body;
      this.historyLoading = false;
    });
  },
  methods: {
    search () {
      if (this.searchLoading) {
        return;
      }
      this.searchLoading = true;
      this.$http.get('/videos', {
        params: {
          query: this.searchQuery
        }
      }).then(response => {
        this.searchResults = response.body;
        this.showResults = true;
        this.searchLoading = false;
      });
    },
    selectVideo (video, needCreate = true) {
      this.current = video;
      if (needCreate) {
        this.addHistoryItem(video);
      }
      this.showResults = false;
    },
    addHistoryItem (video) {
      this.$http.post('/videos', video).then(response => {
        video._id = response.body._id;
        this.history.unshift(video);
      });
    },
    deleteHistoryItem (index) {
      const id = this.history[index]._id;
      this.$http.delete(`/videos/${id}`).then(() => {
        this.history.splice(index, 1);
      });
    }
  }
};
</script>
