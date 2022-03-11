const search = document.getElementById("srch");
const form = document.getElementById("form");

form.addEventListener('submit',function(event){

    event.preventDefault();

    const searchTerm = srch.value;

    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s="+searchTerm)
    .then((response) => {
        return response.json();
    })
    .then((response) => {
        showMeals(response.meals);
    });
});

function showMeals(meals){
    result.innerHTML="";

    meals.forEach(function(food){
        const foodCover = food.strMealThumb;
        const foodName  = food.strMeal;
       const foodLink = food.strYoutube;
      

        //  const divElemnt = document.createElement("div");
        const anchorElement = document.createElement("a");
        const imageElement = document.createElement("img");
         const titleElement = document.createElement('h2')
         
       
      
        anchorElement.href=foodLink;
        anchorElement.target="";
        imageElement.src = foodCover;
        imageElement.title = foodName;
         titleElement.innerText=foodName;
      
          anchorElement.append(imageElement);
       
         anchorElement.append(titleElement);
       
         anchorElement.className ='meal-card';
        
         result.append(anchorElement);
    });
    

}
