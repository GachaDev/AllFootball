import { useState, useEffect } from "react";
import teamsData from "../../../assets/teams.json";

export default function FavouritesTeams() {
	const [teams, setTeams] = useState([]);
	const [selectedTeam, setSelectedTeam] = useState();
	const [favouritesTeams, setFavouritesTeams] = useState([]);

	useEffect(() => {
		setTeams(teamsData.teams);
		setSelectedTeam(teamsData.teams[0].id);
	}, []);

	return (
		<section>
			<form>
				<h1>Equipos Favoritos</h1>
				{favouritesTeams.map((team) => (
					<div className="favourites-team" key={team}>
						<div>
							<img src={teams.find((t) => t.id == team).crest} />
							<p>{teams.find((t) => t.id == team).name}</p>
						</div>
						<button
							onClick={(event) => {
								event.preventDefault();
								setFavouritesTeams(
									favouritesTeams.filter((t) => t !== team)
								);
							}}
						>
							X
						</button>
					</div>
				))}
				<select
					name="team"
					id="team"
					onChange={(e) => {
						setSelectedTeam(e.target.value);
					}}
				>
					{teams.map((team) => (
						<option value={team.id}>{team.name}</option>
					))}
				</select>
				<button
					onClick={(event) => {
						event.preventDefault();
						setFavouritesTeams([...favouritesTeams, selectedTeam]);
					}}
				>
					Añadir
				</button>
			</form>
		</section>
	);
}
