data = open('day1.txt', 'r')
elves_calories = data.read().strip().split('\n\n')
calories = []
for elf in elves_calories:
    meals = elf.split('\n')
    meals = [eval(i) for i in meals]
    calories.append(sum(meals))

answer1 = max(calories)
print('the answer1 is:', answer1)

calories = sorted(calories)
answer2 = sum(calories[-1:-4:-1])
print('the answer2 is:', answer2)
