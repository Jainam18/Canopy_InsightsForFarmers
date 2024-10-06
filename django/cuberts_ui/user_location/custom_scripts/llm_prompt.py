import google.generativeai as genai
import json

def generate_prompt(input_dict):
    # Convert the dictionary to a formatted string
    formatted_input = json.dumps(input_dict, indent=2)
    
    # Create the prompt
    prompt = f"""
Given below is a dataset for groundwater level percentage. The data is provided per week for 52 weeks and we have 4 datapoints per week.
Max: maximum observed groundwater level for that week in the past 10 years
Min: minimum observed groundwater level for that week in the past 10 years
average: Mean observed groundwater level for that week in the past 10 years
current: Observed groundwater level for that week in the latest year
You can analyze how the current years data differs from average, min, max of past 10 years
Heres the data:
{formatted_input}

Assume you are an expert in agriculture. Your aim is to analyze the given trends, find correlations and insights not implicit from the data.
The end user for this information is a farmer. Base your report as intended for the farmer / owner of the land. Use first person language.
Below are some points you can analyze and provide insights on. Feel free to include any other relevant information.
DO NOT use week0, week1 etc. Use month names or seasons instead in your response.

Some topics: 
Seasonality: Identify patterns in groundwater levels (high/low weeks and seasonal fluctuations).

Crop suitability: Recommend crops for different times of the year based on groundwater patterns and water needs (e.g., rice, wheat, corn).

Overall trends: Summarize the long-term trend in groundwater levels over the 10 years (increasing, decreasing, or stable).

Risk management: Suggest ways farmers can manage risks like droughts or excess water, based on this data.

Decision support: How can this data guide irrigation, crop rotation, and water conservation strategies for farmers?

VERY IMPORTANT: Please base your analysis only on the provided data and avoid any assumptions or speculations. If any specific information is not available in the data, indicate so, and refrain from generating responses not supported by the data.
"""

    return prompt


def generate_ai_summary(data_dict,key):
    genai.configure(api_key=key)
    
    # Set up the model
    generation_config = {
    "temperature": 0,
    "top_p": 1,
    "top_k": 1,
    "max_output_tokens": 2048,
    }
    
    safety_settings = [
    {
        "category": "HARM_CATEGORY_HARASSMENT",
        "threshold": "BLOCK_MEDIUM_AND_ABOVE"
    },
    {
        "category": "HARM_CATEGORY_HATE_SPEECH",
        "threshold": "BLOCK_MEDIUM_AND_ABOVE"
    },
    {
        "category": "HARM_CATEGORY_SEXUALLY_EXPLICIT",
        "threshold": "BLOCK_MEDIUM_AND_ABOVE"
    },
    {
        "category": "HARM_CATEGORY_DANGEROUS_CONTENT",
        "threshold": "BLOCK_MEDIUM_AND_ABOVE"
    }
    ]
    
    model = genai.GenerativeModel(model_name="gemini-pro",
                                generation_config=generation_config,
                                safety_settings=safety_settings)
    
    generated_prompt = generate_prompt(data_dict)
    print(generated_prompt)
    
    response = model.generate_content(generated_prompt)
    result = response.candidates[0].content.parts[0].text
    print(result)
    return result