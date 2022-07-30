<template>
    <div class="guests-modal">
        <div class="modal-g-container">
            <div class="adults-filter-container">
                <div>
                    <span class="guests-modal-guest-type">Adults</span>
                    <span>Ages 13 or above</span>
                </div>
                <div class="choose-guests-num-cont">
                    <button type="button" class="g-modal-buttons" :disabled="this.guests.adults == 0 || (!this.ableZeroAdults && this.guests.adults === 1)" @click.stop="guests.adults--; guestsAmount();">
                        <span class="material-icons-sharp"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; fill: none; height: 12px; width: 12px; stroke: currentcolor; stroke-width: 5.33333; overflow: visible;"><path d="m2 16h28"></path></svg></span>
                    </button>
                    <div class="guests-num">{{ guests.adults }}</div>
                    <button type="button" class="g-modal-buttons" @click.stop="guests.adults++; guestsAmount();" :disabled="aboveMax">
                        <span class="material-icons-sharp"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; fill: none; height: 12px; width: 12px; stroke: currentcolor; stroke-width: 5.33333; overflow: visible;"><path d="m2 16h28m-14-14v28"></path></svg></span>
                    </button>
                </div>
            </div>
            <div class="children-filter-container">
                <div>
                    <span class="guests-modal-guest-type">Children</span>
                    <span>Ages 2–12</span>
                </div>
                <div class="choose-guests-num-cont">
                    <button type="button" class="g-modal-buttons" :disabled="guests.children == 0"
                        @click.stop="guests.children--; guestsAmount();">
                        <span class="material-icons-sharp"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; fill: none; height: 12px; width: 12px; stroke: currentcolor; stroke-width: 5.33333; overflow: visible;"><path d="m2 16h28"></path></svg></span>
                    </button>
                    <span class="guests-num">{{ guests.children }}</span>
                    <button type="button" class="g-modal-buttons" @click.stop="guests.children++; guestsAmount();" :disabled="aboveMax">
                        <span class="material-icons-sharp"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; fill: none; height: 12px; width: 12px; stroke: currentcolor; stroke-width: 5.33333; overflow: visible;"><path d="m2 16h28m-14-14v28"></path></svg></span>
                    </button>
                </div>
            </div>
            <div class="babies-filter-container">
                <div>
                    <span class="guests-modal-guest-type">Infants</span>
                    <span>Under 2</span>
                </div>
                <div class="choose-guests-num-cont">
                    <button type="button" class="g-modal-buttons" :disabled="guests.infants == 0"
                        @click.stop="guests.infants--; guestsAmount();">
                        <span class="material-icons-sharp"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; fill: none; height: 12px; width: 12px; stroke: currentcolor; stroke-width: 5.33333; overflow: visible;"><path d="m2 16h28"></path></svg></span>
                    </button>
                    <span class="guests-num">{{ guests.infants }}</span>
                    <button type="button" class="g-modal-buttons" @click.stop="guests.infants++; guestsAmount();" :disabled="aboveMax">
                        <span class="material-icons-sharp"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; fill: none; height: 12px; width: 12px; stroke: currentcolor; stroke-width: 5.33333; overflow: visible;"><path d="m2 16h28m-14-14v28"></path></svg></span>
                    </button>
                </div>
            </div>
            <div class="pets-filter-container">
                <div>
                    <span class="guests-modal-guest-type">Pets</span>
                    <span>(doesn't include service animals)</span>
                </div>
                <div class="choose-guests-num-cont">
                    <button type="button" class="g-modal-buttons" :disabled="guests.pets == 0"
                        @click.stop="guests.pets--; guestsAmount();">
                        <span class="material-icons-sharp"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; fill: none; height: 12px; width: 12px; stroke: currentcolor; stroke-width: 5.33333; overflow: visible;"><path d="m2 16h28"></path></svg></span>
                    </button>
                    <span class="guests-num">{{ guests.pets }}</span>
                    <button type="button" class="g-modal-buttons" @click.stop="guests.pets++; guestsAmount();" :disabled="aboveMax">
                        <span class="material-icons-sharp"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; fill: none; height: 12px; width: 12px; stroke: currentcolor; stroke-width: 5.33333; overflow: visible;"><path d="m2 16h28m-14-14v28"></path></svg></span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    props:{
        max:Number
    },
    data() {
        return {
            guests: { adults: 0, children: 0, infants: 0, pets: 0, sum: 0 },
            ableZeroAdults: true,
            showWho: false,
            showModal: false,
            aboveMax:false,
        }
    },
    methods: {
        closeWho() {
            emit('close')
        },
        guestsAmount() {
            if (this.guests.adults === 0 && (this.guests.infants > 0 || this.guests.children > 0 || this.guests.pets > 0)) {
                this.guests.adults = 1
                this.ableZeroAdults = false
            } else {
                this.ableZeroAdults = true
            }
            this.guests.sum = this.guests.adults + this.guests.infants + this.guests.children + this.guests.pets
            if(this.guests.sum===this.max) this.aboveMax = true
            else this.aboveMax = false
            this.$emit('guest', this.guests)
        },
    },
    computed: {
    },
    created() {
        if (this.$route.query) {
            this.guests.adults = +this.$route.query.adults || 0
            this.guests.children = +this.$route.query.children || 0
            this.guests.infants = +this.$route.query.infants || 0
            this.guests.pets = +this.$route.query.pets || 0
        }
    },
}
</script>