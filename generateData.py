import csv
import random

filename = "customer_data_10k.csv"


age_ranges = [
    (18,24),
    (25,34),
    (35,44),
    (45,54),
    (55,99),
]

weights = [
    3,
    1,
    1,
    1,
    2,
]
states = [
    "Alabama", "Alaska", "Arizona", "Arkansas", "California",
    "Colorado", "Connecticut", "Delaware", "Florida", "Georgia",
    "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa",
    "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland",
    "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri",
    "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey",
    "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio",
    "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina",
    "South Dakota", "Tennessee", "Texas", "Utah", "Vermont",
    "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
]

stateWeights = [
    0.0149,  # Alabama
    0.0022,  # Alaska
    0.0217,  # Arizona
    0.0091,  # Arkansas
    0.1189,  # California
    0.0174,  # Colorado
    0.0108,  # Connecticut
    0.0031,  # Delaware
    0.0648,  # Florida
    0.0320,  # Georgia
    0.0043,  # Hawaii
    0.0056,  # Idaho
    0.0383,  # Illinois
    0.0202,  # Indiana
    0.0095,  # Iowa
    0.0088,  # Kansas
    0.0135,  # Kentucky
    0.0138,  # Louisiana
    0.0040,  # Maine
    0.0184,  # Maryland
    0.0209,  # Massachusetts
    0.0301,  # Michigan
    0.0172,  # Minnesota
    0.0090,  # Mississippi
    0.0184,  # Missouri
    0.0032,  # Montana
    0.0059,  # Nebraska
    0.0093,  # Nevada
    0.0041,  # New Hampshire
    0.0268,  # New Jersey
    0.0063,  # New Mexico
    0.0591,  # New York
    0.0319,  # North Carolina
    0.0023,  # North Dakota
    0.0356,  # Ohio
    0.0120,  # Oklahoma
    0.0127,  # Oregon
    0.0387,  # Pennsylvania
    0.0033,  # Rhode Island
    0.0157,  # South Carolina
    0.0027,  # South Dakota
    0.0207,  # Tennessee
    0.0874,  # Texas
    0.0099,  # Utah
    0.0019,  # Vermont
    0.0258,  # Virginia
    0.0231,  # Washington
    0.0054,  # West Virginia
    0.0177,  # Wisconsin
    0.0018   # Wyoming
]

with open(filename, "w", newline="") as f:

    writer = csv.writer(f)
    writer.writerow(["id","gender","age","spend","location"])
    
    for i in range(1,10001):

        low, high = random.choices(age_ranges, weights=weights, k=1)[0]
        age = random.randint(low, high)
        location = random.choices(states,stateWeights, k=1)[0]
        writer.writerow([
            f"{i:04d}",
            random.choices(["M","F"], weights=[0.3,0.7], k=1)[0],
            age,
            round(random.uniform(5, 300), 2),
            location
        ])
print(f"{filename} created successfully")
