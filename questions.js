// NAPLAN 2016 Year 9 Numeracy — Question Bank
// Sources: Calculator paper, Non-calculator paper, Answer key
// All publicly available from acara.edu.au

const QUESTION_BANK = [

  // ── CALCULATOR PAPER ─────────────────────────────────────────────────────

  {
    id: 'calc-1', paper: 'Calculator', number: 1, topic: 'Number',
    type: 'multiple_choice',
    text: 'Jarrad is paid $18 per hour at his job. How much will he be paid for working 6 hours?',
    options: ['$12', '$24', '$108', '$216'],
    answer: 'C', answerText: '$108',
  },
  {
    id: 'calc-2', paper: 'Calculator', number: 2, topic: 'Number',
    type: 'multiple_choice',
    text: 'Which of the following is equal to 3⁶?\n(Note: the options use index notation)',
    options: ['2³ × 2²', '2³ + 2²', '3² + 2²', '3² × 2²'],
    answer: 'A', answerText: '2³ × 2²',
  },
  {
    id: 'calc-3', paper: 'Calculator', number: 3, topic: 'Measurement',
    type: 'multiple_choice',
    text: 'When keeping horses, 1 hectare of land is recommended for every 2 horses. How many hectares of land would be needed for 8 horses?',
    options: ['4', '6', '10', '16'],
    answer: 'A', answerText: '4',
  },
  {
    id: 'calc-4', paper: 'Calculator', number: 4, topic: 'Number',
    type: 'multiple_choice',
    text: 'What is the value of 5 + (−17) − (−4)?',
    options: ['−16', '−8', '18', '26'],
    answer: 'B', answerText: '−8',
  },
  {
    id: 'calc-5', paper: 'Calculator', number: 5, topic: 'Number',
    type: 'short_answer',
    text: 'Lara earned $16.92 per hour working at a store. This week she worked for 12¼ hours. She used the money she earned this week to buy concert tickets for herself and her friends. Each concert ticket cost $19.55.\n\nWhat is the maximum number of concert tickets Lara could have bought?',
    answer: '10',
  },
  {
    id: 'calc-6', paper: 'Calculator', number: 6, topic: 'Measurement',
    type: 'multiple_choice',
    text: 'Tammy left her house at 8:35 in the morning and did not return until 4:45 in the afternoon. How long was Tammy away from her house?',
    options: ['3 hours 50 minutes', '4 hours 10 minutes', '7 hours 50 minutes', '8 hours 10 minutes'],
    answer: 'D', answerText: '8 hours 10 minutes',
  },
  {
    id: 'calc-7', paper: 'Calculator', number: 7, topic: 'Number',
    type: 'multiple_choice',
    text: 'Mike had 4 cups of rice. He used ½ cup of rice for one recipe and 1¼ cups of rice for another recipe. How many cups of rice did Mike have left?',
    options: ['1¼', '2¼', '2½', '5¾'],
    answer: 'B', answerText: '2¼',
  },
  {
    id: 'calc-8', paper: 'Calculator', number: 8, topic: 'Number',
    type: 'multiple_choice',
    text: 'Mason bought items from an electronics store. Each 10-pack of batteries cost just under $6, and each USB cable cost just under $11. His credit card statement showed he spent $72.40. He bought 2 packs of batteries, 4 USB cables, and 1 flash drive.\n\nAbout how much did the flash drive cost?',
    options: ['$5', '$16', '$28', '$55'],
    answer: 'B', answerText: '$16',
  },
  {
    id: 'calc-9', paper: 'Calculator', number: 9, topic: 'Algebra',
    type: 'multiple_choice',
    text: 'At a hardware store, 20 kg of sand costs $4.50 and 40 kg of the same sand costs $9.00. Which graph could show the relationship between the amount of sand purchased and its cost?\n\n(The correct graph shows a straight line through the origin.)',
    options: [
      'A straight line through the origin (proportional)',
      'A curved line (non-proportional)',
      'A horizontal line (constant cost)',
      'A line not through the origin',
    ],
    answer: 'A', answerText: 'A straight line through the origin',
  },
  {
    id: 'calc-10', paper: 'Calculator', number: 10, topic: 'Statistics and Probability',
    type: 'multiple_choice',
    text: 'James spins the arrow on a wheel. The arrow has an equal chance of landing on each section. The wheel has 8 equal sections: five are labelled "$" and three are labelled with prize amounts ($500, $100, $500).\n\nWhat is the probability that the arrow will land on a "$" section?',
    options: ['0.125', '0.200', '0.375', '0.600'],
    answer: 'C', answerText: '0.375',
  },
  {
    id: 'calc-11', paper: 'Calculator', number: 11, topic: 'Algebra',
    type: 'multiple_choice',
    text: 'A store sold plates for $5 each and mugs for $3 each. Nathan wrote the equation 5p + 3m = 75 to calculate the number of plates (p) and mugs (m) he could buy for exactly $75.\n\nWhich combination works?',
    options: [
      '9 plates and 10 mugs',
      '5 plates and 12 mugs',
      '5 plates and 3 mugs',
      '15 plates and 25 mugs',
    ],
    answer: 'A', answerText: '9 plates and 10 mugs',
  },
  {
    id: 'calc-12', paper: 'Calculator', number: 12, topic: 'Statistics and Probability',
    type: 'short_answer',
    text: 'Leo recorded the number of pages he printed over five weeks: 17, 22, 17, 24, 20.\n\nWhat is the mean number of pages Leo printed per week?',
    answer: '20',
  },
  {
    id: 'calc-13', paper: 'Calculator', number: 13, topic: 'Number',
    type: 'multiple_choice',
    text: 'A jam recipe uses 2 cups of sugar for every 3 cups of fruit. Select the correct combination of sugar and fruit for this recipe.',
    options: [
      '½ cup of sugar and ⅓ cup of fruit',
      '1 cup of sugar and 1.5 cups of fruit',
      '1.5 cups of sugar and 2.5 cups of fruit',
      '4 cups of sugar and 5 cups of fruit',
    ],
    answer: 'B', answerText: '1 cup of sugar and 1.5 cups of fruit',
  },
  {
    id: 'calc-14', paper: 'Calculator', number: 14, topic: 'Measurement',
    type: 'short_answer',
    text: 'A class is making crystals using sugar-water and string. Each student needs 0.25 litres of sugar-water for the experiment.\n\nHow many millilitres of sugar-water does each student need?',
    answer: '250',
  },
  {
    id: 'calc-15', paper: 'Calculator', number: 15, topic: 'Number',
    type: 'multiple_choice',
    text: 'The table below lists the original price and the discount of the same shirt at four shops:\n• Shop A: $20 original, 25% off\n• Shop B: $24 original, ⅓ off\n• Shop C: $30 original, 30% off\n• Shop D: $18 original, $2 off\n\nWhich shop has the lowest sale price for the shirt?',
    options: ['Shop A', 'Shop B', 'Shop C', 'Shop D'],
    answer: 'A', answerText: 'Shop A ($15.00)',
  },
  {
    id: 'calc-16', paper: 'Calculator', number: 16, topic: 'Geometry',
    type: 'short_answer',
    text: 'Ruby designs a rectangular picture for her wall. Inside her rectangle, she adds three straight lines. One angle is marked 45°. What is the size of angle x?\n\n(Hint: the angles form a straight line or use parallel line properties.)',
    answer: '135',
  },
  {
    id: 'calc-17', paper: 'Calculator', number: 17, topic: 'Measurement',
    type: 'multiple_choice',
    text: 'The wheels on a bicycle each have a diameter of 670 mm. The wheels turn 10 times. Approximately how many metres has the bicycle travelled?',
    options: ['10 m', '21 m', '42 m', '352 m'],
    answer: 'B', answerText: '21 m',
  },
  {
    id: 'calc-18', paper: 'Calculator', number: 18, topic: 'Algebra',
    type: 'multiple_choice',
    text: 'Which expression is equivalent to 3x² − 9x + x³?',
    options: [
      '3(x² − 3x + x³)',
      '3x(x − 3 + x²)',
      'x³(3x² − 9x + x³)',
      'x(3x − 9 + x²)',
    ],
    answer: 'D', answerText: 'x(3x − 9 + x²)',
  },
  {
    id: 'calc-19', paper: 'Calculator', number: 19, topic: 'Statistics and Probability',
    type: 'multiple_choice',
    text: 'Jenny asked 35 people whether they work, go to school, do both, or do neither. Results from a Venn diagram: 14 work only, 3 do both, 2 go to school only, 16 do neither.\n\nWhat is the probability that a randomly selected person from the group both goes to school AND works? (Round to three decimal places.)',
    options: ['0.943', '0.100', '0.091', '0.086'],
    answer: 'D', answerText: '0.086',
  },
  {
    id: 'calc-20', paper: 'Calculator', number: 20, topic: 'Geometry',
    type: 'multiple_choice',
    text: 'Lines AB and CD are parallel. Line PQ intersects both lines at points F and G respectively.\n\nWhich pair of angles are equal?',
    options: [
      '∠DGQ and ∠DGP',
      '∠CGP and ∠AFQ',
      '∠QGC and ∠QGD',
      '∠PGC and ∠PFA',
    ],
    answer: 'D', answerText: '∠PGC and ∠PFA (corresponding angles)',
  },
  {
    id: 'calc-21', paper: 'Calculator', number: 21, topic: 'Statistics and Probability',
    type: 'multiple_choice',
    text: 'Anne made a dot plot to show the ages of students in her dance class. The ages range from 6 to 14.\n\nWhat is the range of ages of the students in Anne\'s dance class?',
    options: ['4', '8', '10', '11'],
    answer: 'B', answerText: '8',
  },
  {
    id: 'calc-22', paper: 'Calculator', number: 22, topic: 'Number',
    type: 'short_answer',
    text: 'There are 52 people in a conference room. The ratio of females to males is 15 to 11.\n\nHow many females need to leave the room so that the ratio of females to males is 1 to 1?',
    answer: '8',
  },
  {
    id: 'calc-23', paper: 'Calculator', number: 23, topic: 'Algebra',
    type: 'short_answer',
    text: 'A school vegetable garden has:\n• 4 lettuce plants\n• 4 times as many spinach plants as lettuce plants\n• 2 fewer capsicum plants than spinach plants\n• The number of spinach plants is one quarter the number of tomato plants\n• 1 parsley, 1 sage and 1 basil plant\n\nHow many plants are growing in the school vegetable garden in total?',
    answer: '101',
  },
  {
    id: 'calc-24', paper: 'Calculator', number: 24, topic: 'Number',
    type: 'multiple_choice',
    text: 'A shop sells four sizes of canned red kidney beans:\n• Can 1: $1.76 for 420 g\n• Can 2: $1.89 for 125 g\n• Can 3: $1.00 for 400 g\n• Can 4: $2.40 for 500 g\n\nWhich can costs the least per gram?',
    options: ['Can 1', 'Can 2', 'Can 3', 'Can 4'],
    answer: 'C', answerText: 'Can 3 ($0.0025 per gram)',
  },
  {
    id: 'calc-25', paper: 'Calculator', number: 25, topic: 'Geometry',
    type: 'short_answer',
    text: 'The sum of the interior angles of a pentagon can be found by dividing it into triangles from one vertex. What is the sum of the interior angles of a pentagon?',
    answer: '540',
  },
  {
    id: 'calc-26', paper: 'Calculator', number: 26, topic: 'Geometry',
    type: 'multiple_choice',
    text: 'A Cartesian plane shows four labelled points: J, K, L, and O. Select the correct statement.',
    options: [
      'O is located where x = 0 and y < 0',
      'J is located where x > 0 and y < 0',
      'K is located where x < 0 and y > 0',
      'L is located where x < 0 and y = 0',
    ],
    answer: 'C', answerText: 'K is located where x < 0 and y > 0',
  },
  {
    id: 'calc-27', paper: 'Calculator', number: 27, topic: 'Measurement',
    type: 'short_answer',
    text: 'The Louvre Pyramid in Paris is made up of four identical triangular faces and a square base. The square base has sides of 35 m, and each triangular face has a slant height of 28.6 m.\n\nRoland is hired to clean the interior sides and the floor. What is the total area (in m²) that Roland will need to clean?',
    answer: '3227',
  },
  {
    id: 'calc-28', paper: 'Calculator', number: 28, topic: 'Number',
    type: 'short_answer',
    text: 'Mike put $1000 into a simple interest account for one year. At the end of the year he had $1050.\n\nWhat was the annual percentage interest rate?',
    answer: '5',
  },
  {
    id: 'calc-29', paper: 'Calculator', number: 29, topic: 'Measurement',
    type: 'short_answer',
    text: 'Seth draws a target made up of 5 concentric rings, each 2.5 cm wide (so the outermost radius is 12.5 cm).\n\nWhat is the area of the entire target? Round to the nearest square centimetre.',
    answer: '491',
  },
  {
    id: 'calc-30', paper: 'Calculator', number: 30, topic: 'Measurement',
    type: 'short_answer',
    text: 'A box measures 21 cm × 9.65 cm × 8.25 cm. It is to be filled with pieces of chocolate, each with a volume of 75 cm³.\n\nWhat is the maximum number of pieces of chocolate that can fit inside the box?',
    answer: '22',
  },
  {
    id: 'calc-31', paper: 'Calculator', number: 31, topic: 'Algebra',
    type: 'short_answer',
    text: 'What is the value of x if:\n\n(3/2)x + 4 = 2x − 1',
    answer: '10',
  },
  {
    id: 'calc-32', paper: 'Calculator', number: 32, topic: 'Algebra',
    type: 'short_answer',
    text: 'A design uses twice as many large beads as small beads. Each large bead has a mass of 120 mg and each small bead has a mass of 80 mg. The total mass of all the beads is 32 grams.\n\nHow many beads are used in total?',
    answer: '300',
  },

  // ── NON-CALCULATOR PAPER ──────────────────────────────────────────────────

  {
    id: 'noncalc-1', paper: 'Non-Calculator', number: 1, topic: 'Number',
    type: 'multiple_choice',
    text: 'A shop sells balloons in bags of five. For a party, 20 balloons are needed. How many bags of balloons are needed?',
    options: ['4', '5', '25', '100'],
    answer: 'A', answerText: '4',
  },
  {
    id: 'noncalc-2', paper: 'Non-Calculator', number: 2, topic: 'Measurement',
    type: 'multiple_choice',
    text: 'Joe measures a distance to be 5 metres and 12 centimetres. Which of these shows how Joe can write this measurement in metres?',
    options: ['5.012 m', '5.12 m', '6.12 m', '6.2 m'],
    answer: 'B', answerText: '5.12 m',
  },
  {
    id: 'noncalc-3', paper: 'Non-Calculator', number: 3, topic: 'Statistics and Probability',
    type: 'short_answer',
    text: 'A bag contains 15 beads that are either red or yellow. The probability of randomly removing a red bead is 20%.\n\nWhat is the probability (as a percentage) of randomly removing a yellow bead?',
    answer: '80',
  },
  {
    id: 'noncalc-4', paper: 'Non-Calculator', number: 4, topic: 'Statistics and Probability',
    type: 'multiple_choice',
    text: 'Amelia wants to find the number of people enrolled in either a music class or a drama class, but NOT both.\n\nWhich shaded region in a Venn diagram correctly represents this? (The correct answer shows each circle shaded but NOT the overlapping intersection.)',
    options: [
      'Only the intersection shaded',
      'Both circles fully shaded including intersection',
      'Both circles shaded but NOT the intersection',
      'Only one circle shaded',
    ],
    answer: 'C', answerText: 'Both circles shaded but not the intersection',
  },
  {
    id: 'noncalc-5', paper: 'Non-Calculator', number: 5, topic: 'Geometry',
    type: 'multiple_choice',
    text: 'Point P is at coordinates (2, 3) on a coordinate grid. It is translated DOWN 4 units.\n\nWhat are the new coordinates of point P?',
    options: ['(2, −1)', '(2, 7)', '(6, 3)', '(−2, 3)'],
    answer: 'A', answerText: '(2, −1)',
  },
  {
    id: 'noncalc-6', paper: 'Non-Calculator', number: 6, topic: 'Statistics and Probability',
    type: 'multiple_choice',
    text: 'The heights (in cm) of children on a tennis team are: 119, 122, 119, 127, 127, 117, 128, 124, 127.\n\nSelect the dot plot that correctly displays this data.',
    options: [
      'Dot plot A',
      'Dot plot B',
      'Dot plot C (1 at 117, 2 at 119, 1 at 122, 1 at 124, 3 at 127, 1 at 128)',
      'Dot plot D',
    ],
    answer: 'C', answerText: 'Dot plot C',
  },
  {
    id: 'noncalc-7', paper: 'Non-Calculator', number: 7, topic: 'Measurement',
    type: 'multiple_choice',
    text: 'Beth made a ramp to replace a set of steps that were 0.5 metres high. The ratio of the horizontal length of the ramp to its height is 12:1.\n\nWhat is the horizontal length of the ramp?',
    options: ['5 metres', '6 metres', '24 metres', '60 metres'],
    answer: 'B', answerText: '6 metres',
  },
  {
    id: 'noncalc-8', paper: 'Non-Calculator', number: 8, topic: 'Algebra',
    type: 'multiple_choice',
    text: 'Tom joins a gym with a monthly fee of $56. Members pay an extra $6 per session with a personal trainer. Let x be the number of sessions with a trainer.\n\nWhich expression represents Tom\'s monthly gym bill?',
    options: ['6x', '56x', '56x + 6', '56 + 6x'],
    answer: 'D', answerText: '56 + 6x',
  },
  {
    id: 'noncalc-9', paper: 'Non-Calculator', number: 9, topic: 'Algebra',
    type: 'multiple_choice',
    text: 'Grace throws a ball from a height of 2 metres. The ball reaches a maximum height of 4 metres and lands on the ground about 2 seconds after it is thrown.\n\nWhich graph represents the path of Grace\'s ball? (Look for a parabola starting at height 2, peaking at 4, and hitting the ground near t = 2 s.)',
    options: [
      'Graph A — parabola starting at 2 m, peaking at 4 m, landing at ground ~2 s',
      'Graph B — straight line',
      'Graph C — parabola starting at 0',
      'Graph D — inverted parabola',
    ],
    answer: 'A', answerText: 'Graph A',
  },
  {
    id: 'noncalc-10', paper: 'Non-Calculator', number: 10, topic: 'Measurement',
    type: 'multiple_choice',
    text: 'Riley is building a table top in the shape of a parallelogram with sides of 90 cm and 110 cm.\n\nWhat is the perimeter of the table top?',
    options: ['200 cm', '400 cm', '440 cm', '9900 cm'],
    answer: 'B', answerText: '400 cm',
  },
  {
    id: 'noncalc-11', paper: 'Non-Calculator', number: 11, topic: 'Number',
    type: 'multiple_choice',
    text: 'The diameter of a red blood cell is 0.0076 mm. Which of these shows the diameter written in scientific notation?',
    options: ['7.6 × 10⁻³', '7.6 × 10⁻²', '7.6 × 10²', '7.6 × 10³'],
    answer: 'A', answerText: '7.6 × 10⁻³',
  },
  {
    id: 'noncalc-12', paper: 'Non-Calculator', number: 12, topic: 'Number',
    type: 'multiple_choice',
    text: 'Jane and David had identical chocolate bars. David ate 7/8 of his bar. Jane ate MORE than David.\n\nWhat fraction of her chocolate bar could Jane have eaten?',
    options: ['6/7', '7/9', '8/9', '8/10'],
    answer: 'C', answerText: '8/9 (≈ 0.889, which is greater than 7/8 = 0.875)',
  },
  {
    id: 'noncalc-13', paper: 'Non-Calculator', number: 13, topic: 'Algebra',
    type: 'multiple_choice',
    text: 'Monti and Tarra buy pencils. Tarra buys 2 times the number Monti buys, plus an additional 4 pencils. Let m be the number of pencils Monti buys.\n\nWhich expression shows the number of pencils Tarra buys?',
    options: ['(2 × m) + 4', '2 + (4 × m)', '(m ÷ 2) − 4', '2 − (m ÷ 4)'],
    answer: 'A', answerText: '(2 × m) + 4',
  },
  {
    id: 'noncalc-14', paper: 'Non-Calculator', number: 14, topic: 'Statistics and Probability',
    type: 'multiple_choice',
    text: 'A fair $1 coin and a fair $2 coin are tossed at the same time.\n\nWhat is the probability that both coins will show tails?',
    options: ['1/6', '1/4', '1/3', '1/2'],
    answer: 'B', answerText: '1/4',
  },
  {
    id: 'noncalc-15', paper: 'Non-Calculator', number: 15, topic: 'Measurement',
    type: 'multiple_choice',
    text: 'Myra draws a scale map of Australia. On the map, Sydney is at (9.2, 3.3) and Perth is at (1.3, 3.4). The actual distance between Perth and Sydney is 3294 km. The map distance between them is approximately 7.9 units.\n\nWhich scale should Myra use?',
    options: ['1 unit = 78 km', '1 unit = 262 km', '1 unit = 400 km', '1 unit = 500 km'],
    answer: 'C', answerText: '1 unit ≈ 400 km',
  },
  {
    id: 'noncalc-16', paper: 'Non-Calculator', number: 16, topic: 'Geometry',
    type: 'multiple_choice',
    text: 'A triangle is first reflected across a dotted line, and then rotated 90° clockwise.\n\nWhich image shows the result of these two transformations?',
    options: ['Image A', 'Image B', 'Image C', 'Image D'],
    answer: 'C', answerText: 'Image C',
  },
  {
    id: 'noncalc-17', paper: 'Non-Calculator', number: 17, topic: 'Statistics and Probability',
    type: 'multiple_choice',
    text: 'The mean age of employees at a company is 40 and the median age is 35. A new employee aged 55 is hired.\n\nWhich of these is possible?',
    options: [
      'The mean stays the same and the median increases',
      'The mean stays the same and the median decreases',
      'The mean decreases and the median increases',
      'The mean increases and the median stays the same',
    ],
    answer: 'D', answerText: 'The mean increases and the median stays the same',
  },
  {
    id: 'noncalc-18', paper: 'Non-Calculator', number: 18, topic: 'Algebra',
    type: 'short_answer',
    text: 'Vicki has $300 and saves $20 each week. Anya has $250 and saves $30 each week.\n\nAfter how many weeks will Vicki and Anya have saved the same total amount?',
    answer: '5',
  },
  {
    id: 'noncalc-19', paper: 'Non-Calculator', number: 19, topic: 'Geometry',
    type: 'multiple_choice',
    text: 'Triangle ABC has angles of 90° and 45°. Which statement is true about triangle ABC?',
    options: [
      'Triangle ABC is a scalene triangle',
      'Triangle ABC is an isosceles triangle',
      'Triangle ABC is an equilateral triangle',
      'Triangle ABC is an obtuse triangle',
    ],
    answer: 'B', answerText: 'Isosceles (two 45° angles means two equal sides)',
  },
  {
    id: 'noncalc-20', paper: 'Non-Calculator', number: 20, topic: 'Statistics and Probability',
    type: 'multiple_choice',
    text: '105 people were asked if they are left-handed or right-handed. The results:\n• Men: 15 left-handed, 35 right-handed (50 total)\n• Women: 10 left-handed, 45 right-handed (55 total)\n\nA man is selected at random. What is the probability that he is left-handed?',
    options: ['0.14', '0.24', '0.30', '0.60'],
    answer: 'C', answerText: '0.30 (15 out of 50 men)',
  },
  {
    id: 'noncalc-21', paper: 'Non-Calculator', number: 21, topic: 'Algebra',
    type: 'multiple_choice',
    text: 'Which of the following is always equal to x − y?',
    options: ['−x − y', '−x + y', 'y − x', '−y + x'],
    answer: 'D', answerText: '−y + x',
  },
  {
    id: 'noncalc-22', paper: 'Non-Calculator', number: 22, topic: 'Measurement',
    type: 'short_answer',
    text: 'A plan of the lawn in Pat\'s backyard is shown. The shape is an L-shape made of two rectangles. One rectangle is 4 m × 2 m and the other is 2 m × 2 m.\n\nWhat is the total area of Pat\'s lawn in m²?',
    answer: '12',
  },
  {
    id: 'noncalc-23', paper: 'Non-Calculator', number: 23, topic: 'Number',
    type: 'multiple_choice',
    text: 'Glen has 6 cups of sugar. A biscuit recipe uses ¾ of a cup of sugar for each batch.\n\nWhat is the greatest number of batches Glen can make?',
    options: ['6', '6¾', '7½', '8'],
    answer: 'D', answerText: '8 (because 6 ÷ ¾ = 8)',
  },
  {
    id: 'noncalc-24', paper: 'Non-Calculator', number: 24, topic: 'Number',
    type: 'short_answer',
    text: 'Paul is playing a "Guess My Number" game. The clues are:\n• It is a square number\n• It is divisible by both 2 and 9\n• It has 2 digits\n\nWhat is Paul\'s number?',
    answer: '36',
  },
  {
    id: 'noncalc-25', paper: 'Non-Calculator', number: 25, topic: 'Number',
    type: 'multiple_choice',
    text: 'Leslie has read 5/8 of a 256-page book. Which decimal shows how much of the book Leslie has read?',
    options: ['0.160', '0.320', '0.375', '0.580', '0.625'],
    answer: 'E', answerText: '0.625',
  },
  {
    id: 'noncalc-26', paper: 'Non-Calculator', number: 26, topic: 'Number',
    type: 'multiple_choice',
    text: 'Jason wants to multiply 35 × 62. Which of these expressions gives the correct answer?',
    options: [
      '(30 × 60) + (5 × 2)',
      '(30 × 2) + (60 × 5)',
      '(30 × 62) + (5 × 62)',
      '(30 × 60) + (30 × 2) + (60 × 5)',
    ],
    answer: 'C', answerText: '(30 × 62) + (5 × 62)',
  },
  {
    id: 'noncalc-27', paper: 'Non-Calculator', number: 27, topic: 'Algebra',
    type: 'short_answer',
    text: 'Holly is saving to buy her first car. The table shows her savings over time:\n• Month 2: $310\n• Month 5: $430\n• Month 8: $550\n• Month 10: $630\n\nComplete the rule for the linear relationship: y = ___ × x + 230\n\nWhat is the missing number?',
    answer: '40',
  },
  {
    id: 'noncalc-28', paper: 'Non-Calculator', number: 28, topic: 'Number',
    type: 'short_answer',
    text: 'Michelle bought sunglasses that cost $19.50 before GST was added. GST is 10%.\n\nHow much did Michelle\'s sunglasses cost after adding the GST? Give your answer in dollars and cents.',
    answer: '21.45',
  },
  {
    id: 'noncalc-29', paper: 'Non-Calculator', number: 29, topic: 'Measurement',
    type: 'multiple_choice',
    text: 'Harper has a tablecloth with an area of 3 square metres.\n\nWhat is the area of his tablecloth in square centimetres?',
    options: ['9 cm²', '30 cm²', '300 cm²', '30 000 cm²', '90 000 cm²'],
    answer: 'D', answerText: '30 000 cm²',
  },
  {
    id: 'noncalc-30', paper: 'Non-Calculator', number: 30, topic: 'Number',
    type: 'short_answer',
    text: 'Sam rents a truck. The rental cost is directly proportional to the distance driven. It costs $87.50 to drive 200 km.\n\nWhat is the rental cost to drive 80 km?',
    answer: '35',
  },
  {
    id: 'noncalc-31', paper: 'Non-Calculator', number: 31, topic: 'Geometry',
    type: 'short_answer',
    text: 'Mona can walk from home to school by following the roads: 600 m east and then 800 m south. Alternatively, she can walk in a straight line across a vacant block.\n\nHow many metres less does she walk by going across the vacant block?',
    answer: '400',
  },
  {
    id: 'noncalc-32', paper: 'Non-Calculator', number: 32, topic: 'Measurement',
    type: 'multiple_choice',
    text: 'Two radio telescopes have the following receiving areas:\n• SKA: 1 square kilometre\n• ASKAP: 4000 square metres\n\nWhat is the ratio of the receiving area of ASKAP to SKA?',
    options: ['4:1', '2:5', '1:200', '1:250'],
    answer: 'D', answerText: '1:250 (since 1 km² = 1 000 000 m², and 4000 ÷ 1 000 000 = 1:250)',
  },
];

// ── Helpers ───────────────────────────────────────────────────────────────────

const TOPICS = ['Any topic', 'Number', 'Algebra', 'Measurement', 'Geometry', 'Statistics and Probability'];

function getQuestionsByTopic(topic) {
  if (!topic || topic === 'Any topic') return QUESTION_BANK;
  return QUESTION_BANK.filter(q => q.topic === topic);
}

function getRandomQuestion(topic) {
  const pool = getQuestionsByTopic(topic);
  return pool[Math.floor(Math.random() * pool.length)];
}

function formatQuestionForTutor(q) {
  let text = `[NAPLAN 2016 Year 9 — ${q.paper} Paper, Question ${q.number} — ${q.topic}]\n\n${q.text}`;
  if (q.type === 'multiple_choice' && q.options) {
    text += '\n\nOptions:\n' + q.options.map((o, i) => `${String.fromCharCode(65 + i)}) ${o}`).join('\n');
  }
  return text;
}
