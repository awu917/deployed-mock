export const searchHash = new Map<String, String[][]>();
export const testSearch = new Map<String, String>();
testSearch.set("fanny","aj")

// searching for "Brennan Lee Mulligan" in column DM 
searchHash.set("user/data/d20_csv", [["Fantasy High: Freshman Year",
"2018", "Brennan Lee Mulligan"], ["Fantasy High: Sophomore Year","2019","Brennan Lee Mulligan"],
["The Unsleeping City", "2020", "Brennan Lee Mulligan"], ["Mentopolis", "2023", 
"Brennan Lee Mulligan"]])

// searching for "portion" in column 5 
searchHash.set("user/data/dininghall_csv", [["andrews","peaches", "yakisoba", "apple juice", "portion", "11am"],
["jo's", "no fruit", "impossible burger","peace tea","portion","8pm"], ["ivy room", "kiwi", 
"smoothies","water","portion","3pm"]])

// searching in empty dataset
searchHash.set("user/data/empty_csv", [[]])

// searching in one row
searchHash.set("user/data/one_row_csv", [["George Orwell","1984","1949","Secker & Warburg"]])


