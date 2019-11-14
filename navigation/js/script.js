$(document).ready(function () {

    $('#magnify').click(function () {
        $(this).hide();
        $('#search').toggle('scale');
        $('#search').css('display', 'block')
    });

});



Vue.component('button-counter', {
    data: function() {
        return {
            count: 0
        }
    },
    template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})




Vue.Component('button-counter', {
    data: function() {
        return {
            count: 0
        }
    },
    template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})
