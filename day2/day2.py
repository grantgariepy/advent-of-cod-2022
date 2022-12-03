data = open('day2.txt', 'r')
games = data.read().strip().split('\n')
points = []
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
