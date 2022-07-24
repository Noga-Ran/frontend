<template>
  <section class="review-scores-container">
    <div class="cleanliness">
      <span> Cleanliness</span>
      <span>
        <span class="tryone">
          <progress
            :value="scoreToDisplay('cleanliness')"
            min="0"
            max="5"
          ></progress>
        </span>
        <span class="review-score-display">{{
          scoreToDisplay('cleanliness')
        }}</span></span
      >
    </div>
    <div class="communication">
      <span>Communication</span>
      <span>
        <progress
          :value="scoreToDisplay('communication')"
          min="0"
          max="5"
        ></progress>
        <span class="review-score-display">{{
          scoreToDisplay('communication')
        }}</span></span
      >
    </div>
    <div class="checkin">
      <span>Checkin </span>
      <span>
        <progress :value="scoreToDisplay('checkin')" min="0" max="5"></progress>
        <span class="review-score-display">{{
          scoreToDisplay('checkin')
        }}</span></span
      >
    </div>
    <div class="accuracy">
      <span>Accuracy</span>
      <span>
        <progress
          :value="scoreToDisplay('accuracy')"
          min="0"
          max="5"
        ></progress>
        <span class="review-score-display">{{
          scoreToDisplay('accuracy')
        }}</span></span
      >
    </div>
    <div class="location">
      <span>Location</span>
      <span>
        <progress
          :value="scoreToDisplay('location')"
          min="0"
          max="5"
        ></progress>
        <span class="review-score-display">{{
          scoreToDisplay('location')
        }}</span></span
      >
    </div>
    <div class="value">
      <span>Value</span>
      <span>
        <progress :value="scoreToDisplay('value')" min="0" max="5"></progress>
        <span class="review-score-display">{{
          scoreToDisplay('value')
        }}</span></span
      >
    </div>
    <!-- <div class="progress-bar">
        <label for="determinate">A determinate progress bar:</label>
        <progress value="8" min="0" max="10"></progress>
      </div> -->
  </section>
</template>
<script>
export default {
  props: {
    stay: {
      type: Object,
    },
  },
  data() {
    return {}
  },
  created() {},
  methods: {
    scoreToDisplay(type) {
      return (this.stay.reviewScores[type] / 2).toFixed(1)
    },
  },
  computed: {},
  unmounted() {},
}
</script>
