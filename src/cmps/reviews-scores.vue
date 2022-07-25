<template>
  <section class="review-scores-container">
    <div class="cleanliness">
      <span>Cleanliness</span>
      <span>
        <div class="demo-progress">
          <el-progress color="black" :percentage="scoreToDisplay('cleanliness', true)" :stroke-width="24" />
        </div>
        <span class="review-score-display">{{
            scoreToDisplay('cleanliness')
        }}</span>
      </span>
    </div>
    <div class="communication">
      <span>Communication</span>
      <span>
        <div class="demo-progress">
          <el-progress color="black" :percentage="scoreToDisplay('communication', true)" :stroke-width="24" />
        </div>
        <span class="review-score-display">{{
            scoreToDisplay('communication')
        }}</span>
      </span>
    </div>
    <div class="checkin">
      <span>Checkin </span>
      <span>
        <div class="demo-progress">
          <el-progress color="black" :percentage="scoreToDisplay('checkin', true)" :stroke-width="24" />
        </div>
        <span class="review-score-display">{{
            scoreToDisplay('checkin')
        }}</span>
      </span>
    </div>
    <div class="accuracy">
      <span>Accuracy</span>
      <span>
        <div class="demo-progress">
          <el-progress color="black" :percentage="scoreToDisplay('accuracy', true)" :stroke-width="24" />
        </div>
        <span class="review-score-display">{{
            scoreToDisplay('accuracy')
        }}</span>
      </span>
    </div>
    <div class="location">
      <span>Location</span>
      <span>
        <div class="demo-progress">
          <el-progress color="black" :percentage="scoreToDisplay('location', true)" :stroke-width="24" />
        </div>
        <span class="review-score-display">{{
            scoreToDisplay('location')
        }}</span>
      </span>
    </div>
    <div class="value">
      <span>Value</span>
      <span>
        <div class="demo-progress">
          <el-progress color="black" :percentage="scoreToDisplay('value', true)" :stroke-width="24" />
        </div>
        <span class="review-score-display">{{
            scoreToDisplay('value')
        }}</span>
      </span>
    </div>
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
  created() { },
  methods: {
    scoreToDisplay(type, isOutOf100) {
      if (isOutOf100) {
        return this.stay.reviewScores[type] * 10
      }
      return (this.stay.reviewScores[type] / 2).toFixed(1)
    },
  },
  computed: {},
  unmounted() { },
}
</script>
