## Question 3

To start the backend:

first
	
    cd backend

:

	npm install

this will install the packages needed. Then:
   

	npm start

To start the frontend:

	cd frontend
:

	npm install

this will install the packages needed. Then:

	npm start

React App should open and you should see a simple form.

I used ReactJs for the frontend. 

When you press submit, it should validate the form. It will check if the word 'calculus' is in one of the choices. If it is not, it will alert you to make sure to add it.

If it is, it will send a post request to the backend.

I used NodeJs/Express as the backend.

It will validate as well. If there is no 'calculus' in the body, then it will respond with:

    {
    	"error": {
    		"status": 400,
    		"msg": "Need Calculus in one of your choices"
    	}
    }
    


If validation passes, then it will save data to a fake database and return the form data that was submitted:

{
    "choiceA": "History",
    "choiceB": "Art",
    "choiceC": "Calculus"
}


Please let me know, if you want me to use python/flask for the backend.

