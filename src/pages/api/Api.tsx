
import React, {useEffect}  from 'react'

const Api = () => {

    

  const covid =  fetch('https://disease.sh/v3/covid-19/all').then(function (result) {
  return result.text();
})
.then(function (result) {
  console.log('Covid Details:', result);
})
.catch(function (err) {
  console.error(err.message);
});

    

  return (
    <>
        <h3>go to the console of browser</h3>
    </>
  )
}

export default Api