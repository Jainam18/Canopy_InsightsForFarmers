import h5py

import numpy as np
import glob
from collections import defaultdict 

# Function to find the nearest index for a given latitude or longitude
def find_nearest_index(array, value):
    idx = (np.abs(array - value)).argmin()
    return idx

def preprocess_lat_long_data(lat, long, area):
    print("############## in preprocess")
    # Specify the center point and area size (in kilometers)
    center_lat =lat  # Example latitude
    center_lon =long  # Example longitude
    area_size_km = area  # Area size in kilometers

    # Approximate conversion from kilometers to degrees (1 degree ~ 111 km)
    area_size_deg = area_size_km / 111.0

    # Use glob to get all filenames with a specific pattern (e.g., all .tif files)
    file_pattern = r"C:\Jinang's Collection\Hackathons\NASA Spaceapps\nasa-space-apps-cuberts\django\cuberts_ui\data\GW_SM/*.nc4"
    file_list = glob.glob(file_pattern)

    weekly_ground_water_dict = defaultdict(list)

    for idx, file in enumerate(file_list):

        print("Hi, in loop")
        print(file)
        mod_idx = idx%52
        with h5py.File(file, 'r') as file:
            # Extract latitude and longitude data
            latitudes = file['lat'][:]
            longitudes = file['lon'][:]
            
            # Find the nearest indices for the specified center latitude and longitude
            lat_idx = find_nearest_index(latitudes, center_lat)
            lon_idx = find_nearest_index(longitudes, center_lon)
            
            # Calculate the number of indices that correspond to the area size in degrees
            lat_res_deg = np.abs(latitudes[1] - latitudes[0])
            lon_res_deg = np.abs(longitudes[1] - longitudes[0])
            num_lat_indices = max(1, int(area_size_deg / lat_res_deg) // 2)
            num_lon_indices = max(1, int(area_size_deg / lon_res_deg) // 2)
        
            # Define the range of indices for the area size, ensuring they are within bounds
            lat_start = max(lat_idx - num_lat_indices, 0)
            lat_end = min(lat_idx + num_lat_indices, len(latitudes))
            lon_start = max(lon_idx - num_lon_indices, 0)
            lon_end = min(lon_idx + num_lon_indices, len(longitudes))
        
            # Print selected index ranges and their corresponding coordinates
            # print(f"Latitude range indices: {lat_start} to {lat_end}")
            # print(f"Longitude range indices: {lon_start} to {lon_end}")
            # print(f"Latitude range: {latitudes[lat_start]} to {latitudes[lat_end-1]}")
            # print(f"Longitude range: {longitudes[lon_start]} to {longitudes[lon_end-1]}")
        
            # Extract the groundwater storage data ('gws_inst') and remove missing values
            groundwater_data = file['gws_inst'][0, lat_start:lat_end, lon_start:lon_end]
            groundwater_data = np.where(groundwater_data == -999, np.nan, groundwater_data)  # Replace missing values with NaN
        
            # Extract the corresponding latitude and longitude values for the subset
            subset_latitudes = latitudes[lat_start:lat_end]
            subset_longitudes = longitudes[lon_start:lon_end]
            # print(len(groundwater_data))
            # print(len(groundwater_data[0]))
            
        # Check if the extracted data is empty
        if groundwater_data.size == 0 or np.isnan(groundwater_data).all():
            print("Error: No valid data found for the specified location and area size. Please check the input coordinates and area size.")
        else:
            '''
            # Plot the groundwater data for the specified area
            plt.figure(figsize=(8, 6))
            plt.imshow(groundwater_data, cmap='viridis', extent=[subset_longitudes.min(), subset_longitudes.max(), subset_latitudes.min(), subset_latitudes.max()], origin='lower')
            plt.colorbar(label='Groundwater Storage Percentile (%)')
            plt.title(f'Groundwater Storage Percentile\n(Lat: {center_lat}, Lon: {center_lon}, Area: {area_size_km} km²)')
            plt.xlabel('Longitude')
            plt.ylabel('Latitude')
            plt.show()
            '''
            # average the groundwater level over the area
            total = 0
            count_data = 0
            for row in groundwater_data:
                for col in row:
                    if col != np.nan:
                        total = total + col
                    count_data = count_data + 1
                    
            # Calculate the total number of elements
            
            
            # Calculate the average
            average = total / count_data
            weekly_ground_water_dict[mod_idx+1].append(average)
            
            
        '''
        
        # Plot the surface soil moisture data for the specified area
        with h5py.File(nc4_file_path, 'r') as file:
            # Extract the surface soil moisture data ('sfsm_inst') and remove missing values
            surface_soil_moisture = file['sfsm_inst'][0, lat_start:lat_end, lon_start:lon_end]
            surface_soil_moisture = np.where(surface_soil_moisture == -999, np.nan, surface_soil_moisture)  # Replace missing values with NaN
        
        # Check if the extracted data is empty
        if surface_soil_moisture.size == 0 or np.isnan(surface_soil_moisture).all():
            print("Error: No valid data found for the specified location and area size. Please check the input coordinates and area size.")
        else:
            plt.figure(figsize=(8, 6))
            plt.imshow(surface_soil_moisture, cmap='plasma', extent=[subset_longitudes.min(), subset_longitudes.max(), subset_latitudes.min(), subset_latitudes.max()], origin='lower')
            plt.colorbar(label='Surface Soil Moisture Percentile (%)')
            plt.title(f'Surface Soil Moisture Percentile\n(Lat: {center_lat}, Lon: {center_lon}, Area: {area_size_km} km²)')
            plt.xlabel('Longitude')
            plt.ylabel('Latitude')
            plt.show()
    '''

    print(len(weekly_ground_water_dict.keys()))
    print(len(weekly_ground_water_dict[2]))

    data_dict = {}

    for week, vals in weekly_ground_water_dict.items():
        if vals:
            data_dict[week] = {
                "max": max(vals),
                "min": min(vals),
                "average": sum(vals)/len(vals),
                "current": vals[-1]

            }

    return data_dict
    



# weeks = list(weekly_ground_water_dict.keys())
# avg_values = [sum(values) / len(values) for values in weekly_ground_water_dict.values()]
# min_values = [min(values) for values in weekly_ground_water_dict.values()]
# max_values = [max(values) for values in weekly_ground_water_dict.values()]

# # Plotting the data
# plt.figure(figsize=(12, 6))
# plt.plot(weeks, avg_values, label='Average', color='blue', marker='o')
# plt.plot(weeks, min_values, label='Minimum', color='green', linestyle='--', marker='x')
# plt.plot(weeks, max_values, label='Maximum', color='red', linestyle='--', marker='x')

# # Adding labels and title
# plt.xlabel('Week Number')
# plt.ylabel('Values')
# plt.title('Weekly Data - Average, Minimum, and Maximum')
# plt.legend()