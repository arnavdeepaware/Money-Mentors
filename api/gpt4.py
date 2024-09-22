import os
import ast
from cerebras.cloud.sdk import Cerebras

from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()


client = Cerebras(
    # This is the default and can be omitted
    api_key=os.environ.get("CEREBRAS_API_KEY"),
)

#prompt2_add = ". Assume everything you say is part of a .py file"
chat_completion = client.chat.completions.create(
    messages=[
        {
            "role": "user",
            "content": "Come up with 10 multiple choice questions focused on helping the youth learn about 'Basic Personal Budgeting'. Return the output with 4 python arrays. 1 for questions, 1 for options, 1 for asnwer key (indexes), 1 for answer explanation. Assume everything you say is part of a .py file",
        }
],
    model="llama3.1-8b",
)

msg = chat_completion.choices[0].message.content

'''
def parse_output(api_output):
    # Split the output into sections
    sections = api_output.strip().split('\n\n')

    # Extract the arrays
    questions = eval(sections[0].split('=')[1].strip())
    options = eval(sections[1].split('=')[1].strip())
    answer_key = eval(sections[2].split('=')[1].strip())
    explanations = eval(sections[3].split('=')[1].strip())

    return questions, options, answer_key, explanations

test = parse_output(msg2)
print(test[0])
'''

'''

def parse_apiMsg(api_output):
  count  = 0

  questions = []
  options = [[]]
  answer_key = []
  explanations = []

  start = 0
  end = 0
  j = 0

  #Parsing Questions
  for i in range(len(api_output)):
    
    if api_output[i] == '[' or api_output[i] == ']':
      count += 1

    if count == 1:
      start = i
    elif count == 2:
      end = i
      j = i
      break
  
  print("API Output (substring):" + api_output[start-1:end])
  #questions = ast.literal_eval(api_output[start-1:end])
  start = 0
  end = 0

  #Parsing Options
  for i in range(j, len(api_output)):
    if api_output[i] == '[' or api_output[i] == ']':
      count += 1
    
    if count == 3:
      start = i
    elif count == 24:
      end = i
      j = i
      break
  
  #options = ast.literal_eval(api_output[start: end+1])
  start = 0
  end = 0

  #Parsing answer_keys
  for i in range(j, len(api_output)):
    if api_output[i] == '[' or api_output[i] == ']':
      count += 1
    
    if count == 25:
      start = i
    elif count == 26:
      end = i
      j = i
      break
  
  #answer_key = ast.literal_eval(api_output[start:end+1])

  #Parsing Explanations
  for i in range(j, len(api_output)):
    if api_output[i] == '[' or api_output[i] == ']':
      count += 1
    
    if count == 27:
      start = i
    elif count == 28:
      end = i
      j = i
      break
  
  #explanations = ast.literal_eval(api_output[start:end+1])

  return questions, options, answer_key, explanations

test = parse_apiMsg(msg2)
print(test[0])
    
'''



'''
# Extract the data using eval or literal_eval
def extract_data(api_output):
    # Split the string into lines
    lines = api_output.strip().splitlines()
    
    # Create an iterator for the lines
    line_iterator = iter(lines)
    
    # Extract the relevant sections
    data = {}
    current_key = None

    for line in line_iterator:
        if line.startswith("questions =[" or "questions = ["):
            current_key = "questions"
        elif line.startswith("options ="):
            current_key = "options"
        elif line.startswith("answer_key ="):
            current_key = "answer_key"
        elif line.startswith("answer_explanations ="):
            current_key = "answer_explanations"
        elif current_key and line.strip().startswith("["):
            # Start of a list; evaluate the entire list until the closing bracket
            list_str = line.strip()
            while not list_str.endswith("]"):
                list_str += next(line_iterator).strip()
            data[current_key] = ast.literal_eval(list_str)
            print(f"Extracted {current_key}: {data[current_key]}")  # Debug print

    return data
'''
# Call the function to extract data
#data = extract_data(api_output)

# Print the keys in the extracted data for debugging
#print("Extracted keys:", data.keys())

'''
# Access the arrays
try:
    questions = data["questions"]
    options = data["options"]
    answer_key = data["answer_key"]
    answer_explanations = data["answer_explanations"]
    
    # Print to verify
    print("Questions:", questions)
    print("Options:", options)
    print("Answer Key:", answer_key)
    print("Answer Explanations:", answer_explanations)
except KeyError as e:
    print(f"Key error: {e}")
'''
#Writer Function

'''# Path to the data.py file
file_path = 'data.py'

# Function to clear the file and write new content
def update_data_file(new_content):
    # Clear the file by opening it in write mode
    with open(file_path, 'w') as file:
        # Write the new content line by line
        for line in new_content.splitlines(keepends=True):
            file.write(line)

update_data_file(msg.strip())

print(f"Content written to {file_path}")'''

file_path = 'data.py'

# Function to clear the file and write new content between the markers
def update_data_file(llm_output):
    # Define the markers
    start_marker = '```python'
    end_marker = '```'

    # Find the start and end of the code block
    start = llm_output.find(start_marker) + len(start_marker)
    end = llm_output.find(end_marker, start)

    if start_marker in llm_output and end_marker in llm_output:
        # Extract the content between the markers
        new_content = llm_output[start:end].strip()  # Extract and strip extra whitespace

        # Open the file in write mode to clear it and write the new content
        with open(file_path, 'w') as file:
            # Write the new content line by line
            for line in new_content.splitlines(keepends=True):
                file.write(line)
        

        file.close()
        print(f"Content written to {file_path}")
    else:
        print("Code block markers not found in the LLM output.")

# Call the function with your LLM output
update_data_file(msg.strip())
