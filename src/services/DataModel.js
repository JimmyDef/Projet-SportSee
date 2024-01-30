class FormatData {
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
      score: this._score,
      userInfos: this._userInfos,
    };
  }
}

export default FormatData;
