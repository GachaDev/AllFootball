import "./Account.css";
import UpdateInfo from "./UpdateInfo/UpdateInfo";
import UpdatePassword from "./UpdatePassword/UpdatePassword";
import FavouritesTeams from "./FavouritesTeams/FavouritesTeams";
import Profile from "./Profile/Profile";

export default function Account() {
	return (
		<div className="account">
			<Profile />
			<div className="settings">
				<UpdateInfo />
				<UpdatePassword />
				<FavouritesTeams />
			</div>
		</div>
	);
}
