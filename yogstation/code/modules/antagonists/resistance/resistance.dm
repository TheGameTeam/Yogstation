#define TRAITOR_HUMAN "human"
#define TRAITOR_AI	  "AI"

/datum/antagonist/traitor/resistance
	name = "Resistance"
	roundend_category = "resistance members"
	antagpanel_category = "Resistance"
	job_rank = ROLE_TRAITOR
	antag_moodlet = /datum/mood_event/focused
	employer = "Freedom"
	give_objectives = TRUE
	should_give_codewords = FALSE
/datum/antagonist/traitor/proc/add_objective(datum/objective/O)
	objectives += O

/datum/antagonist/traitor/proc/remove_objective(datum/objective/O)
	objectives -= O

/datum/antagonist/traitor/resistance/forge_traitor_objectives()
	forge_human_objectives()

/datum/antagonist/traitor/syndicate/forge_human_objectives()
	var/datum/objective/custom/obj = new("Setup a resistance HQ with your fellow resistance members.")
	destroy_objective.owner = owner
	destroy_objective.find_target()
	add_objective(destroy_objective)


/datum/antagonist/traitor/syndicate/greet()
	to_chat(owner.current, "<span class='alertsyndie'>You are the [owner.special_role] member. Free the station from oppression!</span>")
	owner.announce_objectives()