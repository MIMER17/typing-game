var words = [];
words[0] =
  "Apples, Apricots, Avocados, Bananas, Boysenberries, Blueberries, Cherries, Cucumbers, Grapefruit, Grapes, Gooseberries, Guava, Jackfruit, Mulberry, Melon, Mango, Mango, Lime, Olive, Oranges, Papaya, Persimmon, Peach, Pomegranate, Pineapple, Rambutan, Raspberries, Watermelon, Wolfberry";

words[1] =
  "vegetables, chicken, Hamburger, pizza, Biscuits , Barbecue, cuisine, ";

words[2] =
  "Ambulance Bicycle Boat Bullet Train Bus Jet Canoe Car Plane Motor Scooter Helicopter Cable Car Motor Racing Speed Boat Raft Paddle Sailboat Wheel Sports Car Accident Plane Helicopter Runway Ship Truck Submarine Skateboard Tractor Anchor Boat";

words[3] =
  "Fly Grasshopper Ant Bee Beetle Butterfly Bug Caterpillar Centipede Cockroach Cricket Dragonfly Mosquito Snail";
words[4] =
  "pig turkey chicken donkey goat horse hen duck rabbit sheep cow cat dog mouse deer wolf lion tiger bear crocodile rabbit";
words[5] = "spring, summer, autumn, winter";
words[6] =
  "Australia Austria Bangladesh Belgium Bhutan Brazil Canada China Denmark Egypt France Germany Pakistan Philippines Panama Nepal Malaysia Kenya Iraq Iran India Qatar Spain Sudan Syria";
words[7] =
  "overflow underflow undefined determined determination doctor brother understand earthquakes educational effectively environment enhancement observation radiobiology fulfillments reevaluation reduplicated redirecting feasibility achievability fruitfulness reinstalling relativistic relationship repetitively representing repositories repositories classification categorization electrotherapy electrostatics extraordinaire essentialities xeroradiography conceptualization counteraggression counterdemonstrate counterintuitively impartialities illiberalities facilitative objectifies objectively observatory experience programme reinforcement passengers ultrasonic ultrasound visualized vaporizing";

words[8] =
  "abolished backbones backbone blackboard backslash cabdriver capstone accidents according capsuling validities validation variations vaporizers visualises ultrasmart unaccepted unacademic objectified facilitation featherbrain faithfulness  decentralized decomposition cabinetmaking carbohydrates cancellations circumstances clarification cleanlinesses determination diagnostician egocentrically electrofishing electronically Unscramble";
words[9] =
  "illegitimately immutabilities industrialised infusibilities legislatorships liberalizations latensification literalizations logarithmically vascularization videoconference vulnerabilities volatilizations viscoelasticity saponification semidocumentary sensationalism sensationalist semilogarithmic supernaturalism superstimulated suppressibility survivability synchronisation systematization quasicrystalline quasiperiodicity quadruplications xeroradiographies";
words[10] =
  "cardiorespiratory characterological commercialization counterblockading counterproductive dehydrochlorinate differentiability decriminalization ferrimagnetically fractionalization ultraconservatism uncontrollability unconventionality weatherproofnesses agammaglobulinemia astrophotographies astrophotographers anticounterfeiting antiadministration anthropocentricity aerothermodynamics bourgeoisification biodegradabilities conceptualization ";
words[11] =
  "any arc are ape ago add act mac man max mat lace lack lady last late loud leaf scout sleep shelf self jaguar jail jailor jasmin begin better behalf aware wait water juice milk meat team state shelter shadow zebra backup bangles tomato ability disability mix mud cap capability capable capacity capital captain capture champion championship chance change comedy comfort comfortable command commander comment commercial commission commit commitment committee defendant defense defensive deficit define definitely definition degree delay deliver egg eight either elderly elect election electric electricity electronic element elementary eliminate elite elsewhere few fewer fiber fiction field fifteen";
words[12] =
  "fifth fifty fight fighter fighting gaze gear gender gene general generally generate generation genetic gentleman headquarters health healthy hear hearing heart heat heaven heavily heavy heel indeed independence independent index iron Islamic island kick kid kill killer killing kind king kiss kitchen knee knife knock know knowledge lab laugh launch law lawn motivation motor mount mountain mouse mouth move negotiation neighbor neighborhood neither nerve nervous net network never news once one ongoing onion online only onto open opening operate operating operation operator opinion olympic pet phase phenomenon philosophy phone photo photograph photographer phrase prepare prescription presence";
words[13] =
  "present presentation preserve raw reach react reaction rope rose rough roughly round route routine she sheet shelf shell shelter specific specifically speech station statistics status stuff stupid style subject submit subsequent tent term thought thousand threat tour tourist tournament type typical typically ugly ultimate ultimately unable useful user usual usually utility vacation valley valuable value variable volunteer vote voter vs vulnerable wage wait wake walk wall wander war white who whole yes yesterday yet yield you young your yours yourself youth zone";

function cleanwords(words) {
  words = words
    .toLowerCase()
    .replace(/[^a-zA-Z ]/g, "")
    .split(" ");
  return words;
}

for (var i = 0; i < words.length; i++) {
  words[i] = cleanwords(words[i]);
}

export { words };