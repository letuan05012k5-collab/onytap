import math

# dữ liệu training
data = [
    (25, 40000, 'N'),
    (35, 60000, 'N'),
    (45, 80000, 'N'),
    (20, 20000, 'N'),
    (35, 120000, 'N'),
    (52, 18000, 'N'),
    (23, 95000, 'Y'),
    (40, 62000, 'Y'),
    (60, 100000, 'Y'),
    (48, 220000, 'Y'),
    (33, 150000, 'Y')
]

# điểm cần phân loại
new_point = (48, 142000)

k = 5

# tính khoảng cách
distances = []

for age, loan, label in data:
    d = math.sqrt((new_point[0] - age)**2 + (new_point[1] - loan)**2)
    distances.append((d, label, age, loan))

# sắp xếp theo khoảng cách
distances.sort()

# lấy k điểm gần nhất
neighbors = distances[:k]

count_Y = 0
count_N = 0

for d, label, age, loan in neighbors:
    print("Age:", age, "Loan:", loan, "Class:", label, "Distance:", d)
    
    if label == 'Y':
        count_Y += 1
    else:
        count_N += 1

# kết quả
print("\nVote:")
print("Y =", count_Y)
print("N =", count_N)

if count_Y > count_N:
    print("Kết luận: Default = Y")
else:
    print("Kết luận: Default = N")