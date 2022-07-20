<template>
    <section class="demo-cont">
        <div class="demo-img">
        </div>
        <section class="demo-lines">
            <div class="line-a">
                <div class="sub-a1"></div>
                <div class="sub-a2"></div>
            </div>
            <div class="line-b"></div>
            <div class="line-c"></div>
            <div class="line-d"></div>
        </section>
    </section>
</template>
<style>
html {
    margin: 0px;
    padding: 0;
}

.demo-cont {
    height: fit-content;
}

.demo-img {
    height: 250px;
    width: 250px;
    background-color: #DDDDDD;
    border-radius: 20px;
}

.demo-lines {
    width: 248px;
    height: 120px;
    direction: rtl;
}

.demo-lines>* {
    justify-self: end;
    background-color: #DDDDDD;
    height: 18px;
    border-radius: 5px;
}

.line-a {
    background-color: transparent;
    margin-top: 10px;
   display: grid;
    margin-bottom: 4px;
}
.sub-a1{
    border-radius: 4px;
    width: 120px;
    height: 100%;
    background-color: #DDDDDD;
}
.sub-a2{
    grid-column: 3;
    display: flex;
    justify-self: end;
    border-radius: 4px;
    width: 47px;
    height: 100%;
    background-color: #DDDDDD;
}
.line-b {
    width: 85px;
    margin-bottom: 4px;
}

.line-c {
    width: 60px;
    margin-bottom: 8px;
}

.line-d {
    width: 58px;
}
</style>