// hashmaps for storing mock filepaths to "datasets"
export const viewHash = new Map<String, String[][]>();
export const testHash = new Map<String, String>();
testHash.set("fanny","aj")
viewHash.set("user/data/d20_csv", [["Campaign","Year","DM"],["Fantasy High: Freshman Year",
"2018", "Brennan Lee Mulligan"], ["The Ravening War","2023","Matthew Mercer"],
["Fantasy High: Sophomore Year","2019","Brennan Lee Mulligan"],
["The Unsleeping City", "2020", "Brennan Lee Mulligan"], ["Mentopolis", "2023", 
"Brennan Lee Mulligan"], ["Court of Fey and Flowers", "2022", "Aabria Iyengar"]])

viewHash.set("user/data/dininghall_csv", [["1","2","3","4","5","6"],["andrews",
"peaches", "yakisoba", "apple juice", "portion", "11am"], ["ratty","bananas","soups", "coffee milk", "unlimited", "4pm"],
["vdub","apples","falafel","mgp","unlimited","2pm"],["jo's", "no fruit", "impossible burger","peace tea","portion","8pm"], ["ivy room", "kiwi", 
"smoothies","water","portion","3pm"]])
// 1= Dining hall, 2=fruits, 3=dish, 4=drink, 5=unlimited/portion, 6=best hour
