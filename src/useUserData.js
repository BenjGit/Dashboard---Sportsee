import UserModel from "./data/userModel";

function useUserData() {
  const { data, toggleDataSource, changeSelectedUserId, error } = UserModel();

  // Fonction pour changer l'utilisateur
  const changeUser = (userId) => {
    changeSelectedUserId(userId)
  };

  // Fonction pour changer la source de données
  const changeDataSource = (source) => {
    toggleDataSource(source);
  };

  return { userData: data, changeUser, changeDataSource, error };
}

export default useUserData;