import json
from data import questions, options, answer_key, explanations

data = {
    "questions": questions,
    "options": options,
    "answer_key": answer_key,
    "explanations": explanations
}

# Write the arrays to a JSON file
with open('public\data.json', 'w') as json_file:
    json.dump(data, json_file)