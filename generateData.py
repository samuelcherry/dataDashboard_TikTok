import csv
import random

filename = "customer_data_10k.csv"

with open(filename, "w", newline="") as f:

    writer = csv.writer(f)
    writer.writerow(["id","gender","age","spend"])

    for i in range(1,10001):
        writer.writerow([
            f"{i:04d}",
            random.choice(["M","F"]),
            random.randint(18,70),
            round(random.uniform(5, 300), 2)
        ])
print(f"{filename} created successfully")
