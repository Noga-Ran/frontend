<template>
    <div class="share-background"></div>
    <section class="share-modal">
        <div class="close-button">
            <button><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation"
                    focusable="false"
                    style="display: block; fill: none; height: 16px; width: 16px; stroke: currentcolor; stroke-width: 3; overflow: visible;">
                    <path d="m6 6 20 20"></path>
                    <path d="m26 6-20 20"></path>
                </svg></button>
        </div>
        <h1>Share this place with friends and family</h1>
        <span><img :src="sharing.media" alt="ccffff" srcset="">
            <p>{{stay.name}}</p>
        </span>
        <section class="web-container">
            <ShareNetwork v-for="network in networks" :network="network.network" :key="network.network" 
                :style="{backgroundColor: network.color, display: 'flex',
                alignItems: 'center',height: '76px !important',
                outline: 'none !important',
                cursor: 'pointer !important',
                border: '1px solid rgb(221, 221, 221) !important',
                borderRadius: '12px !important'}" :url="sharing.url" :title="sharing.title"
                :description="sharing.description" :quote="sharing.quote" :hashtags="sharing.hashtags"
                :twitterUser="sharing.twitterUser" :media="stay.imgUrls[0]">
                <img :src="network.icon" />
                <span>{{ network.name }}</span>
            </ShareNetwork>
            <section @click.prevent="copy">
                <img src="https://res.cloudinary.com/nogacloud/image/upload/v1663192476/share/copy.svg" alt=""
                    srcset="">
                <span>Copy Link</span>
            </section>
        </section>
        <section class="msg-container">
            <div class="link-msg" v-bind:style="{ display: displayMsg, opacity:opacity}">
                <img src="https://res.cloudinary.com/nogacloud/image/upload/v1663227617/other/check.svg" alt=""
                    srcset="">
                Link Copied
            </div>
        </section>
    </section>
</template>

<script>

export default {
    props: {
        stay:{
            type:Object
        } 
    },
data() {
return {
    displayMsg: 'flex',
    opacity:0,
    sharing: {
        url: window.location.href,
        title: this.stay?.name,
        description: 'Check out the place I found at Skybnb!',
        quote: 'The hot reload is so fast it\'s near instant. - Evan You',
        hashtags: 'vaction',
        twitterUser: 'youyuxi',
        media: `https://res.cloudinary.com/nogacloud/image/upload/stays/${this.stay.imgUrls[0]}`
      },
      networks: [
        { network: 'email', name: 'Email', icon: 'https://res.cloudinary.com/nogacloud/image/upload/v1663192476/share/email.svg'},
        { network: 'facebook', name: 'Facebook', icon: 'https://res.cloudinary.com/nogacloud/image/upload/v1663192475/share/facebook.svg'},
        { network: 'linkedin', name: 'LinkedIn', icon: 'https://res.cloudinary.com/nogacloud/image/upload/v1663194934/share/linkedin-svgrepo-com.svg'},
        { network: 'messenger', name: 'Messenger', icon: 'https://res.cloudinary.com/nogacloud/image/upload/v1663192474/share/logo.png'},
        { network: 'pinterest', name: 'Pinterest', icon: 'https://res.cloudinary.com/nogacloud/image/upload/v1663194934/share/pinterest-svgrepo-com.svg'},
        { network: 'reddit', name: 'Reddit', icon: 'https://res.cloudinary.com/nogacloud/image/upload/v1663194934/share/reddit-svgrepo-com.svg'},
        { network: 'twitter', name: 'Twitter', icon: 'https://res.cloudinary.com/nogacloud/image/upload/v1663192474/share/twitter.svg'},
        { network: 'whatsapp', name: 'Whatsapp', icon: 'https://res.cloudinary.com/nogacloud/image/upload/v1663192474/share/whatup.svg'},
      ]
}
},
methods: {
    async copy() {
      await navigator.clipboard.writeText(window.location.href);
      this.opacity = 1
      setTimeout(function () {
        this.opacity=0}.bind(this), 2000)
    }, catch(e) {
      alert('Cannot copy');
    }
},
}
</script>