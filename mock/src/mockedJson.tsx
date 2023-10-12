// hashmaps for storing mock filepaths to "datasets"
export const viewHash = new Map<String, String[][]>();

viewHash.set("user/data/d20_csv", [["Campaign","Year","DM"],["Fantasy High: Freshman Year",
"2018", "Brennan Lee Mulligan"], ["The Ravening War","2023","Matthew Mercer"],
["Fantasy High: Sophomore Year","2019","Brennan Lee Mulligan"],
["The Unsleeping City", "2020", "Brennan Lee Mulligan"], ["Mentopolis", "2023", 
"Brennan Lee Mulligan"], ["Court of Fey and Flowers", "2022", "Aabria Iyengar"]])

// 1= Dining hall, 2=fruits, 3=dish, 4=drink, 5=unlimited/portion, 6=best hour
viewHash.set("user/data/dininghall_csv", [["1","2","3","4","5","6"],["andrews",
"peaches", "yakisoba", "apple juice", "portion", "11am"], ["ratty","bananas","soups", "coffee milk", "unlimited", "4pm"],
["vdub","apples","falafel","mgp","unlimited","2pm"],["jo's", "no fruit", "impossible burger","peace tea","portion","8pm"], ["ivy room", "kiwi", 
"smoothies","water","portion","3pm"]])

// empty dataset
viewHash.set("user/data/empty_csv", [[]])

// one row
viewHash.set("user/data/one_row_csv", [["George Orwell","1984","1949","Secker & Warburg"]])

// one column
viewHash.set("user/data/one_column_csv", [["Pride and Prejudice"],["Sense and Sensibility"],["Northanger Abbey"],["Emma"]])

// big dataset
viewHash.set("user/data/big_data_csv", [["ID Race","Race","ID Year","Year","Household Income by Race","Household Income by Race Moe","Geography","ID Geography","Slug Geography"],["0","Total","2020","2020","85413","6122","\"Bristol County, RI\"","05000US44001","bristol-county-ri"],["0","Total","2020","2020","75857","2022","\"Kent County, RI\"","05000US44003","kent-county-ri"],["0","Total","2020","2020","84282","2629","\"Newport County, RI\"","05000US44005","newport-county-ri"],["0","Total","2020","2020","62323","1270","\"Providence County, RI\"","05000US44007","providence-county-ri"],["0","Total","2020","2020","86970","3651","\"Washington County, RI\"","05000US44009","washington-county-ri"],["1","White","2020","2020","85359","6432","\"Bristol County, RI\"","05000US44001","bristol-county-ri"],["1","White","2020","2020","75408","2311","\"Kent County, RI\"","05000US44003","kent-county-ri"],["1","White","2020","2020","87407","3706","\"Newport County, RI\"","05000US44005","newport-county-ri"],["1","White","2020","2020","67639","1255","\"Providence County, RI\"","05000US44007","providence-county-ri"],["1","White","2020","2020","88147","3942","\"Washington County, RI\"","05000US44009","washington-county-ri"],["2","Black","2020","2020","72443","54768","\"Bristol County, RI\"","05000US44001","bristol-county-ri"],["2","Black","2020","2020","100375","20176","\"Kent County, RI\"","05000US44003","kent-county-ri"],["2","Black","2020","2020","46622","14559","\"Newport County, RI\"","05000US44005","newport-county-ri"],["2","Black","2020","2020","46084","3384.0000000000000","\"Providence County, RI\"","05000US44007","providence-county-ri"],["2","Black","2020","2020","45849","6614","\"Washington County, RI\"","05000US44009","washington-county-ri"],["3","Native American","2020","2020","36106","16192","\"Providence County, RI\"","05000US44007","providence-county-ri"],["4","Asian","2020","2020","69612","53700","\"Bristol County, RI\"","05000US44001","bristol-county-ri"],["4","Asian","2020","2020","97578","18617","\"Kent County, RI\"","05000US44003","kent-county-ri"],["4","Asian","2020","2020","110350","12239","\"Newport County, RI\"","05000US44005","newport-county-ri"],["4","Asian","2020","2020","81438","5762","\"Providence County, RI\"","05000US44007","providence-county-ri"],["4","Asian","2020","2020","69653","31807.000000000000","\"Washington County, RI\"","05000US44009","washington-county-ri"],["5","Pacific Islander","2020","2020","43990","4351","\"Providence County, RI\"","05000US44007","providence-county-ri"],["6","Other","2020","2020","60446","13988","\"Kent County, RI\"","05000US44003","kent-county-ri"],["6","Other","2020","2020","29375","2225","\"Newport County, RI\"","05000US44005","newport-county-ri"],["6","Other","2020","2020","40706","4024","\"Providence County, RI\"","05000US44007","providence-county-ri"],["7","Two Or More","2020","2020","100250","22504","\"Bristol County, RI\"","05000US44001","bristol-county-ri"],["7","Two Or More","2020","2020","75938","26788","\"Kent County, RI\"","05000US44003","kent-county-ri"],["7","Two Or More","2020","2020","83574","5944","\"Newport County, RI\"","05000US44005","newport-county-ri"],["7","Two Or More","2020","2020","47163","8892","\"Providence County, RI\"","05000US44007","providence-county-ri"],["7","Two Or More","2020","2020","96898","42213","\"Washington County, RI\"","05000US44009","washington-county-ri"],["8","White Non-Hispanic","2020","2020","86463","7051","\"Bristol County, RI\"","05000US44001","bristol-county-ri"],["8","White Non-Hispanic","2020","2020","75265","2318","\"Kent County, RI\"","05000US44003","kent-county-ri"],["8","White Non-Hispanic","2020","2020","87713","3638","\"Newport County, RI\"","05000US44005","newport-county-ri"],["8","White Non-Hispanic","2020","2020","71428","1376","\"Providence County, RI\"","05000US44007","providence-county-ri"],["8","White Non-Hispanic","2020","2020","87516","3859.0000000000000","\"Washington County, RI\"","05000US44009","washington-county-ri"],["9","Hispanic","2020","2020","64167","25729","\"Bristol County, RI\"","05000US44001","bristol-county-ri"],["9","Hispanic","2020","2020","76602","14152","\"Kent County, RI\"","05000US44003","kent-county-ri"],["9","Hispanic","2020","2020","56652","33449","\"Newport County, RI\"","05000US44005","newport-county-ri"],["9","Hispanic","2020","2020","41592","1749","\"Providence County, RI\"","05000US44007","providence-county-ri"],["9","Hispanic","2020","2020","104929","30259","\"Washington County, RI\"","05000US44009","washington-county-ri"],["0","Total","2019","2019","83092","4339","\"Bristol County, RI\"","05000US44001","bristol-county-ri"],["0","Total","2019","2019","73521","1703","\"Kent County, RI\"","05000US44003","kent-county-ri"],["0","Total","2019","2019","79454","2611","\"Newport County, RI\"","05000US44005","newport-county-ri"],["0","Total","2019","2019","58974","1051","\"Providence County, RI\"","05000US44007","providence-county-ri"],["0","Total","2019","2019","85531","2042","\"Washington County, RI\"","05000US44009","washington-county-ri"],["1","White","2019","2019","82750","5075","\"Bristol County, RI\"","05000US44001","bristol-county-ri"],["1","White","2019","2019","73415","1906","\"Kent County, RI\"","05000US44003","kent-county-ri"],["1","White","2019","2019","82158","2740","\"Newport County, RI\"","05000US44005","newport-county-ri"],["1","White","2019","2019","64195","1128","\"Providence County, RI\"","05000US44007","providence-county-ri"],["1","White","2019","2019","87019","2150","\"Washington County, RI\"","05000US44009","washington-county-ri"],["2","Black","2019","2019","79609","17881","\"Kent County, RI\"","05000US44003","kent-county-ri"],["2","Black","2019","2019","44765","12493","\"Newport County, RI\"","05000US44005","newport-county-ri"],["2","Black","2019","2019","43387","3459.0000000000000","\"Providence County, RI\"","05000US44007","providence-county-ri"],["2","Black","2019","2019","83011","16035","\"Washington County, RI\"","05000US44009","washington-county-ri"],["3","Native American","2019","2019","39375","35211","\"Newport County, RI\"","05000US44005","newport-county-ri"],["3","Native American","2019","2019","33200","10203","\"Providence County, RI\"","05000US44007","providence-county-ri"],["4","Asian","2019","2019","118750","78991","\"Bristol County, RI\"","05000US44001","bristol-county-ri"],["4","Asian","2019","2019","92268","9257","\"Kent County, RI\"","05000US44003","kent-county-ri"],["4","Asian","2019","2019","106912","24529","\"Newport County, RI\"","05000US44005","newport-county-ri"],["4","Asian","2019","2019","75425","4603","\"Providence County, RI\"","05000US44007","providence-county-ri"],["4","Asian","2019","2019","75735","11221","\"Washington County, RI\"","05000US44009","washington-county-ri"],["5","Pacific Islander","2019","2019","40815","16560","\"Providence County, RI\"","05000US44007","providence-county-ri"],["6","Other","2019","2019","70179","23312","\"Kent County, RI\"","05000US44003","kent-county-ri"],["6","Other","2019","2019","36962","3139","\"Providence County, RI\"","05000US44007","providence-county-ri"],["7","Two Or More","2019","2019","110078","43635","\"Bristol County, RI\"","05000US44001","bristol-county-ri"],["7","Two Or More","2019","2019","58112","11419","\"Kent County, RI\"","05000US44003","kent-county-ri"],["7","Two Or More","2019","2019","70750","16835","\"Newport County, RI\"","05000US44005","newport-county-ri"],["7","Two Or More","2019","2019","45030","6614","\"Providence County, RI\"","05000US44007","providence-county-ri"],["8","White Non-Hispanic","2019","2019","83216","4938","\"Bristol County, RI\"","05000US44001","bristol-county-ri"],["8","White Non-Hispanic","2019","2019","73316","1864.0000000000000","\"Kent County, RI\"","05000US44003","kent-county-ri"],["8","White Non-Hispanic","2019","2019","82282","2614","\"Newport County, RI\"","05000US44005","newport-county-ri"],["8","White Non-Hispanic","2019","2019","67975","1352","\"Providence County, RI\"","05000US44007","providence-county-ri"],["8","White Non-Hispanic","2019","2019","86857","2237","\"Washington County, RI\"","05000US44009","washington-county-ri"],["9","Hispanic","2019","2019","70543","24295","\"Bristol County, RI\"","05000US44001","bristol-county-ri"],["9","Hispanic","2019","2019","74685","11265","\"Kent County, RI\"","05000US44003","kent-county-ri"],["9","Hispanic","2019","2019","56106","22438","\"Newport County, RI\"","05000US44005","newport-county-ri"],["9","Hispanic","2019","2019","39125","1865","\"Providence County, RI\"","05000US44007","providence-county-ri"],["9","Hispanic","2019","2019","83661","58895","\"Washington County, RI\"","05000US44009","washington-county-ri"],["0","Total","2018","2018","75578","3422","\"Bristol County, RI\"","05000US44001","bristol-county-ri"],["0","Total","2018","2018","70223","1879.0000000000000","\"Kent County, RI\"","05000US44003","kent-county-ri"],["0","Total","2018","2018","77237","3024","\"Newport County, RI\"","05000US44005","newport-county-ri"],["0","Total","2018","2018","55233","904.0000000000000","\"Providence County, RI\"","05000US44007","providence-county-ri"],["0","Total","2018","2018","81301","2985","\"Washington County, RI\"","05000US44009","washington-county-ri"],["1","White","2018","2018","75730","3643.0000000000000","\"Bristol County, RI\"","05000US44001","bristol-county-ri"],["1","White","2018","2018","70402","1972","\"Kent County, RI\"","05000US44003","kent-county-ri"],["1","White","2018","2018","80035","3330","\"Newport County, RI\"","05000US44005","newport-county-ri"],["1","White","2018","2018","60437","1180","\"Providence County, RI\"","05000US44007","providence-county-ri"],["1","White","2018","2018","82240","3183","\"Washington County, RI\"","05000US44009","washington-county-ri"],["2","Black","2018","2018","63472","21347","\"Kent County, RI\"","05000US44003","kent-county-ri"],["2","Black","2018","2018","50625","19586","\"Newport County, RI\"","05000US44005","newport-county-ri"],["2","Black","2018","2018","40709","2053","\"Providence County, RI\"","05000US44007","providence-county-ri"],["2","Black","2018","2018","90313","20795","\"Washington County, RI\"","05000US44009","washington-county-ri"],["3","Native American","2018","2018","35767","27464","\"Newport County, RI\"","05000US44005","newport-county-ri"],["3","Native American","2018","2018","35101","12922","\"Providence County, RI\"","05000US44007","providence-county-ri"],["4","Asian","2018","2018","82250","80499","\"Bristol County, RI\"","05000US44001","bristol-county-ri"],["4","Asian","2018","2018","97879","17549","\"Kent County, RI\"","05000US44003","kent-county-ri"],["4","Asian","2018","2018","107733","19097","\"Newport County, RI\"","05000US44005","newport-county-ri"],["4","Asian","2018","2018","68383","3861","\"Providence County, RI\"","05000US44007","providence-county-ri"],["4","Asian","2018","2018","75946","10049","\"Washington County, RI\"","05000US44009","washington-county-ri"],["5","Pacific Islander","2018","2018","41508","4724","\"Providence County, RI\"","05000US44007","providence-county-ri"],["6","Other","2018","2018","75679","31076","\"Kent County, RI\"","05000US44003","kent-county-ri"],["6","Other","2018","2018","11341","4468","\"Newport County, RI\"","05000US44005","newport-county-ri"],["6","Other","2018","2018","35225","2479","\"Providence County, RI\"","05000US44007","providence-county-ri"],["7","Two Or More","2018","2018","48083","14257","\"Kent County, RI\"","05000US44003","kent-county-ri"],["7","Two Or More","2018","2018","68125","32171","\"Newport County, RI\"","05000US44005","newport-county-ri"],["7","Two Or More","2018","2018","41607","3396","\"Providence County, RI\"","05000US44007","providence-county-ri"],["8","White Non-Hispanic","2018","2018","76057","3490.0000000000000","\"Bristol County, RI\"","05000US44001","bristol-county-ri"],["8","White Non-Hispanic","2018","2018","70286","2041.0000000000000","\"Kent County, RI\"","05000US44003","kent-county-ri"],["8","White Non-Hispanic","2018","2018","80290","3111","\"Newport County, RI\"","05000US44005","newport-county-ri"],["8","White Non-Hispanic","2018","2018","64160","985.0000000000000","\"Providence County, RI\"","05000US44007","providence-county-ri"],["8","White Non-Hispanic","2018","2018","82166","3288","\"Washington County, RI\"","05000US44009","washington-county-ri"],["9","Hispanic","2018","2018","51602","31160.000000000000","\"Bristol County, RI\"","05000US44001","bristol-county-ri"],["9","Hispanic","2018","2018","73906","14038","\"Kent County, RI\"","05000US44003","kent-county-ri"],["9","Hispanic","2018","2018","41512","24697","\"Newport County, RI\"","05000US44005","newport-county-ri"],["9","Hispanic","2018","2018","35139","1669","\"Providence County, RI\"","05000US44007","providence-county-ri"],["9","Hispanic","2018","2018","82279","56035","\"Washington County, RI\"","05000US44009","washington-county-ri"],["0","Total","2017","2017","74630","3265","\"Bristol County, RI\"","05000US44001","bristol-county-ri"],["0","Total","2017","2017","69047","2197","\"Kent County, RI\"","05000US44003","kent-county-ri"],["0","Total","2017","2017","75463","1780","\"Newport County, RI\"","05000US44005","newport-county-ri"],["0","Total","2017","2017","52530","812","\"Providence County, RI\"","05000US44007","providence-county-ri"],["0","Total","2017","2017","77862","2350","\"Washington County, RI\"","05000US44009","washington-county-ri"],["1","White","2017","2017","74736","3411","\"Bristol County, RI\"","05000US44001","bristol-county-ri"],["1","White","2017","2017","69912","2016.0000000000000","\"Kent County, RI\"","05000US44003","kent-county-ri"],["1","White","2017","2017","77244","2184","\"Newport County, RI\"","05000US44005","newport-county-ri"],["1","White","2017","2017","57917","1170","\"Providence County, RI\"","05000US44007","providence-county-ri"],["1","White","2017","2017","78350","2452","\"Washington County, RI\"","05000US44009","washington-county-ri"],["2","Black","2017","2017","40024","9584","\"Kent County, RI\"","05000US44003","kent-county-ri"],["2","Black","2017","2017","39483","15542","\"Newport County, RI\"","05000US44005","newport-county-ri"],["2","Black","2017","2017","37553","2770","\"Providence County, RI\"","05000US44007","providence-county-ri"],["2","Black","2017","2017","98250","25121","\"Washington County, RI\"","05000US44009","washington-county-ri"],["3","Native American","2017","2017","8938","7773","\"Newport County, RI\"","05000US44005","newport-county-ri"],["3","Native American","2017","2017","27960","3745","\"Providence County, RI\"","05000US44007","providence-county-ri"],["4","Asian","2017","2017","78778","38212","\"Bristol County, RI\"","05000US44001","bristol-county-ri"],["4","Asian","2017","2017","95000","16888","\"Kent County, RI\"","05000US44003","kent-county-ri"],["4","Asian","2017","2017","105875","2926","\"Newport County, RI\"","05000US44005","newport-county-ri"],["4","Asian","2017","2017","62983","5383","\"Providence County, RI\"","05000US44007","providence-county-ri"],["4","Asian","2017","2017","73094","34344","\"Washington County, RI\"","05000US44009","washington-county-ri"],["5","Pacific Islander","2017","2017","41711","6825.000000000000","\"Providence County, RI\"","05000US44007","providence-county-ri"],["6","Other","2017","2017","42304","23495","\"Kent County, RI\"","05000US44003","kent-county-ri"],["6","Other","2017","2017","32522","31695","\"Newport County, RI\"","05000US44005","newport-county-ri"],["6","Other","2017","2017","33026","2866","\"Providence County, RI\"","05000US44007","providence-county-ri"],["7","Two Or More","2017","2017","77011","37514","\"Bristol County, RI\"","05000US44001","bristol-county-ri"],["7","Two Or More","2017","2017","44000","11831","\"Kent County, RI\"","05000US44003","kent-county-ri"],["7","Two Or More","2017","2017","56250","45583","\"Newport County, RI\"","05000US44005","newport-county-ri"],["7","Two Or More","2017","2017","40453","5913","\"Providence County, RI\"","05000US44007","providence-county-ri"],["8","White Non-Hispanic","2017","2017","74788","3320","\"Bristol County, RI\"","05000US44001","bristol-county-ri"],["8","White Non-Hispanic","2017","2017","69724","2055","\"Kent County, RI\"","05000US44003","kent-county-ri"],["8","White Non-Hispanic","2017","2017","77780","2312","\"Newport County, RI\"","05000US44005","newport-county-ri"],["8","White Non-Hispanic","2017","2017","61466","1015","\"Providence County, RI\"","05000US44007","providence-county-ri"],["8","White Non-Hispanic","2017","2017","78364","2455","\"Washington County, RI\"","05000US44009","washington-county-ri"],["9","Hispanic","2017","2017","47542","31963","\"Bristol County, RI\"","05000US44001","bristol-county-ri"],["9","Hispanic","2017","2017","65069","14243.000000000000","\"Kent County, RI\"","05000US44003","kent-county-ri"],["9","Hispanic","2017","2017","36250","10115","\"Newport County, RI\"","05000US44005","newport-county-ri"],["9","Hispanic","2017","2017","32838","1822","\"Providence County, RI\"","05000US44007","providence-county-ri"],["9","Hispanic","2017","2017","66000","46545","\"Washington County, RI\"","05000US44009","washington-county-ri"],["0","Total","2016","2016","73096","2962","\"Bristol County, RI\"","05000US44001","bristol-county-ri"],["0","Total","2016","2016","65592","1418","\"Kent County, RI\"","05000US44003","kent-county-ri"],["0","Total","2016","2016","71347","2096","\"Newport County, RI\"","05000US44005","newport-county-ri"],["0","Total","2016","2016","50637","599","\"Providence County, RI\"","05000US44007","providence-county-ri"],["0","Total","2016","2016","74302","2229","\"Washington County, RI\"","05000US44009","washington-county-ri"],["1","White","2016","2016","73255","2929","\"Bristol County, RI\"","05000US44001","bristol-county-ri"],["1","White","2016","2016","66116","1376","\"Kent County, RI\"","05000US44003","kent-county-ri"],["1","White","2016","2016","73101","2389","\"Newport County, RI\"","05000US44005","newport-county-ri"],["1","White","2016","2016","55418","964","\"Providence County, RI\"","05000US44007","providence-county-ri"],["1","White","2016","2016","74962","2699","\"Washington County, RI\"","05000US44009","washington-county-ri"],["2","Black","2016","2016","50750","21955","\"Kent County, RI\"","05000US44003","kent-county-ri"],["2","Black","2016","2016","38125","15190","\"Newport County, RI\"","05000US44005","newport-county-ri"],["2","Black","2016","2016","36347","2108","\"Providence County, RI\"","05000US44007","providence-county-ri"],["2","Black","2016","2016","78333","24435","\"Washington County, RI\"","05000US44009","washington-county-ri"],["3","Native American","2016","2016","7708","7150","\"Newport County, RI\"","05000US44005","newport-county-ri"],["3","Native American","2016","2016","27207","6936","\"Providence County, RI\"","05000US44007","providence-county-ri"],["4","Asian","2016","2016","78598","44648","\"Bristol County, RI\"","05000US44001","bristol-county-ri"],["4","Asian","2016","2016","84451","15969.000000000000","\"Kent County, RI\"","05000US44003","kent-county-ri"],["4","Asian","2016","2016","99615","32343","\"Newport County, RI\"","05000US44005","newport-county-ri"],["4","Asian","2016","2016","58865","6489","\"Providence County, RI\"","05000US44007","providence-county-ri"],["4","Asian","2016","2016","53864","34694","\"Washington County, RI\"","05000US44009","washington-county-ri"],["5","Pacific Islander","2016","2016","49075","8896","\"Providence County, RI\"","05000US44007","providence-county-ri"],["6","Other","2016","2016","48849","9012","\"Kent County, RI\"","05000US44003","kent-county-ri"],["6","Other","2016","2016","35946","17527","\"Newport County, RI\"","05000US44005","newport-county-ri"],["6","Other","2016","2016","31410","2525","\"Providence County, RI\"","05000US44007","providence-county-ri"]])

// dataset with commas and quotes

