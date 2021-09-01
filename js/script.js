Vue.config.devtools = true;

const root = new Vue({
    el: '#root',
    data: {
        email:[],
    },
    methods: {
        emailApiCall(){
            axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((res) => {
              // runs in case of success
              const response = res.data.response;
              this.email.push(response) ;
            })
            .catch((error) => {
              // runs in case of error
              console.log(error);
            })
            .then(() => {
              // runs in any case
            });
        },
        
    },
    created() {
        for(i=0;i<10;i++){
            this.emailApiCall();
        }
      },
})