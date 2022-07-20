
<template>
    <section class="category-filters-layout">
        <section class="category-filters-container">
            <div class="filter-img-layout">
                <div class="filter-img-container">
                    <img src="../assets/img/filter-imgs/islands.jpg" alt="">
                    <div class="filter-img-txt">
                        Islands
                    </div>
                </div>
            </div>
            <div class="filter-img-layout">
                <div class="filter-img-container">
                    <img src="../assets/img/filter-imgs/beach.jpg" alt="">
                    <div class="filter-img-txt">
                        Beach
                    </div>
                </div>
            </div>
            <div class="filter-img-layout">
                <div class="filter-img-container">
                    <img src="../assets/img/filter-imgs/amazing-pools.jpg" alt="">
                    <div class="filter-img-txt">
                        Amazing pools
                    </div>
                </div>
            </div>
            <div class="filter-img-layout">
                <div class="filter-img-container">
                    <img src="../assets/img/filter-imgs/omg.jpg" alt="">
                    <div class="filter-img-txt">
                        OMG!
                    </div>
                </div>
            </div>
            <div class="filter-img-layout">
                <div class="filter-img-container">
                    <img src="../assets/img/filter-imgs/national-parks.jpg" alt="">
                    <div class="filter-img-txt">
                        National parks
                    </div>
                </div>
            </div>
            <div class="filter-img-layout">
                <div class="filter-img-container">
                    <img src="../assets/img/filter-imgs/cabins.jpg" alt="">
                    <div class="filter-img-txt">
                        Cabins
                    </div>
                </div>
            </div>
            <div class="filter-img-layout">
                <div class="filter-img-container">
                    <img src="../assets/img/filter-imgs/campings.jpg" alt="">
                    <div class="filter-img-txt">
                        Campings
                    </div>
                </div>
            </div>
            <div class="filter-img-layout">

                <div class="filter-img-container">
                    <img src="../assets/img/filter-imgs/design.jpg" alt="">
                    <div class="filter-img-txt">
                        Design
                    </div>
                </div>
            </div>
            <div class="filter-img-layout">
                <div class="filter-img-container">
                    <img src="../assets/img/filter-imgs/tiny-homes.jpg" alt="">
                    <div class="filter-img-txt">
                        Tiny homes
                    </div>
                </div>
            </div>
            <div class="filter-img-layout">
                <div class="filter-img-container">
                    <img src="../assets/img/filter-imgs/desert.jpg" alt="">
                    <div class="filter-img-txt">
                        Desert
                    </div>
                </div>
            </div>
            <div class="filter-img-layout">
                <div class="filter-img-container">
                    <img src="../assets/img/filter-imgs/arctic.jpg" alt="">
                    <div class="filter-img-txt">
                        Arctic
                    </div>
                </div>
            </div>
            <div class="filter-img-layout">
                <div class="filter-img-container">
                    <img src="../assets/img/filter-imgs/amazing-views.jpg" alt="">
                    <div class="filter-img-txt">
                        Amazing views
                    </div>
                </div>
            </div>
            <div class="filter-img-layout">
                <div class="filter-img-container">
                    <img src="../assets/img/filter-imgs/lakefront.jpg" alt="">
                    <div class="filter-img-txt">
                        Lakefront
                    </div>
                </div>
            </div>
        </section>
    </section>
</template>

<script>

export default {
    components: {
    },
}
</script>
<style>
@font-face {
    font-family: circular;
    src: url("../assets/fonts/circular/Gilroy-Regular.ttf");
}
.category-filters-layout {
    background-color: white;
    /* width: 100vw; scroll */
    margin-top: 20px;
    position: sticky;
    top: 80px;
}

.category-filters-container {
    margin: 0 80px;
    display: grid;
    grid-auto-flow: column;
    gap: 16px;
}

.filter-img-layout {
    display: flex;
    align-items: center;
    height: 78px;
}

.filter-img-container {
    width: fit-content;
    display: grid;
    grid-auto-flow: row;
    justify-content: center;
    height: 48px;
}

.filter-img-container:hover {
    cursor: pointer;
    border-bottom: 2px solid #DDDDDD;
    margin-bottom: -2px;
}

.category-filters-container img {
    height: 24px;
    justify-self: center;
}

.filter-img-txt {
    font-size: 12px;
    font-family: circular;
    font-weight: 600;
}
</style>