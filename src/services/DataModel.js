export class FormatUserData {
  constructor(data) {
    this._id = data.id;
    this._keyData = data.keyData;
    this._score = data.score || data.todayScore;
    this._userInfos = data.userInfos;
  }

  getUserData() {
    const formattedKeyData = { ...this._keyData };
    // Copie des données pour éviter les mutations directes

    // Vérification et formatage du compteur de calories
    if (formattedKeyData.calorieCount > 999) {
      formattedKeyData.calorieCount = formattedKeyData.calorieCount
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return {
      id: this._id,
      keyData: formattedKeyData,
      score: this._score * 100,
      userInfos: this._userInfos,
    };
  }
}

export class FormatPerfData {
  constructor(data) {
    this._performance = data.data;
  }
  // RADARCHART
  getPerfData() {
    const kind = {
      1: "Cardio",
      2: "Energie",
      3: "endurance",
      4: "Force",
      5: "Vitesse",
      6: "intensité",
    };
    const formattedPerf = this._performance.map((perf) => {
      return {
        value: perf.value,
        subject: kind[perf.kind],
      };
    });

    return formattedPerf;
  }
}
export class FormatAverageSessionData {
  constructor(data) {
    this._sessions = data.sessions;
  }

  getAverageSessionData() {
    const listOfDays = ["L", "M", "M", "J", "V", "S", "D"];
    const formattedData = this._sessions.map((day, idx) => {
      return {
        name: listOfDays[idx],
        sessionLength: day.sessionLength,
      };
    });
    return formattedData;
  }
}
export class FormatActivityData {
  constructor(data) {
    this._sessions = data.sessions;
  }

  getActivityData() {
    const formattedActivity = this._sessions.map((act, idx) => {
      return {
        name: idx + 1,
        kg: act.kilogram,
        calories: act.calories,
      };
    });
    return formattedActivity;
  }
}
