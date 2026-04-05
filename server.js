function makeGetRequest(path) {
    axios.get(path).then(
        (response) => {
            var result = response.data;
            console.log(result);
        },
        (error) => {
            console.log(error);
        }
    );
}
makeGetRequest('http://127.0.0.1:5500/test');
axios.get('/user/12345')
  .catch(function (error) {
    console.log(error.toJSON());
  });
