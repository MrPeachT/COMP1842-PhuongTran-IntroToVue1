const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            description: 'A sock is a piece of clothing worn on the feet and often covering the ankle or some part of the calf. Some types of shoes or boots are typically worn over socks. In ancient times, socks were made from leather or matted animal hair.',
            image: './assets/images/socks_green.jpg',
            url: 'https://www.google.com/search?q=socks&rlz=1C1GCEU_enGB832GB832&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjm5dOZ6v3-AhWQy4UKHfJdD0oQ_AUoAXoECAEQAw&biw=1536&bih=754&dpr=1.25',
            inventory: 0,
            onSale: true,

        }
    }
})

