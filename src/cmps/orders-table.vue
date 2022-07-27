<template> 
<section>
 <template>
    <div class="container">
        <h3 >Your Orders</h3>
        <table class="orders-table">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Booker</th>
                    <th>Stay</th>
                    <th>Dates</th>
                    <th>Nights</th>
                    <th>Guests</th>
                    <th>Price per Night</th>
                    <th>Total</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="order in orders" :key="order.id">
                    <td>{{order.date}} </td>
                    <td>{{order.booker}}</td>
                    <td>{{order.stay}}</td>
                    <td>{{order.checkIn}}-{{order.checkOut}}</td>
                    <td>{{order.nights}}</td>
                    <td>{{order.guests}}</td>
                    <td>{{order.pricePerNight}}</td>
                    <td>{{order.total}}</td>
                    <td>{{order.status}}</td>
                    <button>Approve</button>
                    <button>Reject</button>
                </tr>
            </tbody>
        </table>
    </div>    
</template>
  
  
  </section>
</template>
<script>
export default {
data() {
return {};
},
created() {},
methods: {},
computed: {},
unmounted() {},
}
</script>