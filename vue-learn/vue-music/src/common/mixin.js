import {mapGetters, mapMutations, mapActions} from 'vuex'
export const searchMixin = {
  data() {
    return {
      query: '',
      refreshDelay: 120
    }
  },
  methods: {
    onQueryChange(query) {
      this.query = query.trim()
      
    },
    blurInput() {
      this.$refs.searchBox.blur()
    },
    addQuery(query) {
      this.$refs.searchBox.setQuery(query)
    },
    saveSearch(song) {
      console.log(song)
      this.selectPlaySong(song)
      this.saveSearchHistory(query)
    },
    ...mapActions([
      'saveSearchHistory',
      'selectPlaySong'
    ])
  },
} 