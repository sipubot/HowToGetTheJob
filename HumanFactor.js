var HumanFactor = (function (HumanFactor,  undefined) {
	"use strict";
	//master function
  var GOAL = {
    //sub total 100%
    "Health": {
      "Height": NaN,
      "Weight": NaN,
      "Insurance": NaN,
    },
    "Education": {
      "Books": NaN,
      "Seminar": NaN,
      "Library": NaN,
    },
    "Money": {
      "Salary": NaN,
      "Bonus": NaN,
      "Others": NaN,
    },
    "Honor": {
      "Respect": NaN,
      "Privacy": NaN,
    },
    "Time": {
      "Hobby": NaN,
      "Working": NaN,
      "Vacation": NaN,
      "Free": NaN,
    },
    "Relationship": {
      "Friend": NaN,
      "Coworker": NaN,
      "Family": NaN,
    },
    "Surroundings": {
      "Room": NaN,
      "Food": NaN,
      "Comunication": NaN,
      "Entertainment": NaN,
    },
  };
  var HUMAN = {
    //max point 0~255
    "Health": {
      "Height": NaN,
      "Weight": NaN,
      "Insurance": NaN,
    },
    "Education": {
      "Books": NaN,
      "Seminar": NaN,
      "Library": NaN,
    },
    "Money": {
      "Salary": NaN,
      "Bonus": NaN,
      "Others": NaN,
    },
    "Honor": {
      "Respect": NaN,
      "Privacy": NaN,
    },
    "Time": {
      "Hobby": NaN,
      "Working": NaN,
      "Vacation": NaN,
      "Free": NaN,
    },
    "Relationship": {
      "Friend": NaN,
      "Coworker": NaN,
      "Family": NaN,
    },
    "Surroundings": {
      "Room": NaN,
      "Food": NaN,
      "Comunication": NaN,
      "Entertainment": NaN,
    },
  };
  var FACTOR = {
    "MentalPoint" : NaN,
    "HealthPoint" : NaN,
    "Gold" : NaN,
    "Level" : NaN,
  };
  var FACTORDETAIL = {
    "Mental Point" : NaN,
  };

  function calcFACTOR() {

  }


	HumanFactor.SetGoal = function (category, subcategory, setV) {
    GOAL[category][subcategory] = setV;
	};
  HumanFactor.SetGoal = function (category, subcategory, setV) {
    HUMAN[category][subcategory] = setV;
	};
  HumanFactor.SetGoalALL = function (setV) {
    GOAL = setV;
	};
  HumanFactor.SetHumanALL = function (setV) {
    HUMAN = setV;
	};
  HumanFactor.ValueOf = function () {
    return FACTOR;
	};
  HumanFactor.getGOAL = function () {
    return GOAL;
	};
  HumanFactor.getHUMAN = function () {
    return HUMAN;
	};
	return HumanFactor;
})(window.HumanFactor || {});
