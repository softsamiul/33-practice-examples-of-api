const searchFood = () => {
    const inputTag = document.getElementById('search-input');
    const searchInputText = inputTag.value;
    // console.log(searchInputText);
    if (inputTag.value == '') {
        const p = document.getElementById('search-err');
        p.classList.remove('d-none');

    } else {
        // fetchApii
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInputText}`;
        const p = document.getElementById('search-err');
        p.classList.add('d-none');
        fetch(url)
            .then(res => res.json())
            .then(data => foodSearchResult(data.meals))
    }
}

const foodSearchResult = (meals) => {
    // console.log(meals);
    const foodSeacrShowElem = document.getElementById('food-show');
    foodSeacrShowElem.textContent = '';
    meals.forEach(meal => {

        // console.log(meal.idMeal);

        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0, 100)}...</p>
            </div>
            <button id="singleFood" onclick="singleFoodSelect(${meal.idMeal})"> See Details </button>
        </div>
        `;
        foodSeacrShowElem.appendChild(div);

    });



}

const singleFoodSelect = (idMeal) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displaySelectedFood(data.meals[0]))

    // const selectedFoodElem = document.getElementById('selected-food');


}

const displaySelectedFood = (idMeal) => {
    console.log(idMeal);
    const selectedFoodElem = document.getElementById('selected-food');
    selectedFoodElem.textContent = '';
    const div = document.createElement('div');
    div.classList.add('card', 'mx-auto');
    div.style.width = '32rem';
    div.innerHTML = `
    <img src="${idMeal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${idMeal.strMeal}</h5>
        <p class="card-text">${idMeal.strInstructions.slice(0, 100)}</p>
        <video width="100%" height="" controls>
            <source src="${idMeal.strYoutube}" type="video/mp4">
            test
        </video>
    </div>
    `;

    selectedFoodElem.appendChild(div);
}