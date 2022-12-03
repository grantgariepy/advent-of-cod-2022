data = open('day2.txt', 'r')
games = data.read().strip().split('\n')
print(games)
score1 = 0
# part 1
for game in games:
    if((game[0] == 'A') and (game[2] == 'X')):
        score1 += 4
    if((game[0] == 'A') and (game[2] == 'Y')):
        score1 += 8
    if((game[0] == 'A') and (game[2] == 'Z')):
        score1 += 3
    if((game[0] == 'B') and (game[2] == 'X')):
        score1 += 1
    if((game[0] == 'B') and (game[2] == 'Y')):
        score1 += 5
    if((game[0] == 'B') and (game[2] == 'Z')):
        score1 += 9
    if((game[0] == 'C') and (game[2] == 'X')):
        score1 += 7
    if((game[0] == 'C') and (game[2] == 'Y')):
        score1 += 2
    if((game[0] == 'C') and (game[2] == 'Z')):
        score1 += 6
# part 2
score2 = 0
for game2 in games:
    # draws
    if((game2[2] == 'Y')):
        if((game2[0] == 'A')):
            score2 += 4
        if((game2[0] == 'B')):
            score2 += 5
        if((game2[0] == 'C')):
            score2 += 6
    # wins
    if((game2[2] == 'Z')):
        if((game2[0] == 'C')):
            score2 += 7
        if((game2[0] == 'B')):
            score2 += 9
        if((game2[0] == 'A')):
            score2 += 8
    # losses
    if((game2[2] == 'X')):
        if((game2[0] == 'B')):
            score2 += 1
        if((game2[0] == 'A')):
            score2 += 3
        if((game2[0] == 'C')):
            score2 += 2
print("Part 1 score:", score1, "Part 2 Score:", score2)


# rewrite


# with open('day2.txt') as f:
#     guide = f.read().splitlines()

# score1 = 0
# score2 = 0

# for round in guide:
#     match round:
#         case "A X":
#             score1 += 1+3
#             score2 += 3+0
#         case "A Y":
#             score1 += 2+6
#             score2 += 1+3
#         case "A Z":
#             score1 += 3+0
#             score2 += 2+6
#         case "B X":
#             score1 += 1+0
#             score2 += 1+0
#         case "B Y":
#             score1 += 2+3
#             score2 += 2+3
#         case "B Z":
#             score1 += 3+6
#             score2 += 3+6
#         case "C X":
#             score1 += 1+6
#             score2 += 2+0
#         case "C Y":
#             score1 += 2+0
#             score2 += 3+3
#         case "C Z":
#             score1 += 3+3
#             score2 += 1+6

# print(score1)
# print(score2)
