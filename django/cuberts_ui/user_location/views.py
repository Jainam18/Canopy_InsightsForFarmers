# # from django.http import JsonResponse
# # from django.shortcuts import render, redirect, get_object_or_404
# # from django.views.decorators.csrf import csrf_exempt
# # from django.contrib.auth import authenticate, login
# # from django.contrib.auth.decorators import login_required
# # from django.contrib.auth.models import User
# # from .forms import LocationForm
# # from .models import UserLocation
# # from .custom_scripts.preprocess_data import preprocess_lat_long_data
# # from .custom_scripts.llm_prompt import generate_ai_summary
# #
# # import asyncio
# # import httpx
# #
# # async def fetch_all(urls):
# #     async with httpx.AsyncClient() as client:
# #         tasks = [client.get(url) for url in urls]
# #         responses = await asyncio.gather(*tasks)
# #     return [response.json() for response in responses]
# #
# #
# # @csrf_exempt
# # def create_user(request):
# #     if request.method == 'POST':
# #         username = request.POST.get('username')
# #         email = request.POST.get('email')
# #         password = request.POST.get('password')
# #         if not username or not email or not password:
# #             return JsonResponse({'error': 'Username, email, and password are required'}, status=400)
# #
# #         try:
# #             user = User.objects.create_user(username=username, email=email, password=password)
# #             return JsonResponse({'status': 'success', 'user_id': user.id, 'message': 'User created successfully'})
# #         except Exception as e:
# #             return JsonResponse({'error': str(e)}, status=500)
# #
# #     return JsonResponse({'error': 'Invalid request method'}, status=405)
# #
# # @csrf_exempt
# # def user_login(request):
# #     if request.method == 'POST':
# #         username = request.POST.get('username')
# #         password = request.POST.get('password')
# #         if not username or not password:
# #             return JsonResponse({'error': 'Username and password are required'}, status=400)
# #
# #         user = authenticate(request, username=username, password=password)
# #         if user is not None:
# #             login(request, user)
# #             return JsonResponse({'status': 'success', 'user_id': user.id})
# #         else:
# #             return JsonResponse({'error': 'Invalid credentials'}, status=401)
# #     return JsonResponse({'error': 'Invalid request method'}, status=405)
# #
# # @login_required
# # def get_user(request, user_id):
# #     user = get_object_or_404(User, id=user_id)
# #     if request.user.id != user_id and not request.user.is_staff:
# #         return JsonResponse({'error': 'Unauthorized access'}, status=403)
# #
# #     return JsonResponse({
# #         'id': user.id,
# #         'username': user.username,
# #         'email': user.email,
# #         'date_joined': user.date_joined
# #     })
# #
# # @login_required
# # def update_user(request, user_id):
# #     if request.method == 'POST':
# #         user = get_object_or_404(User, id=user_id)
# #         if request.user.id != user_id and not request.user.is_staff:
# #             return JsonResponse({'error': 'Unauthorized access'}, status=403)
# #
# #         username = request.POST.get('username')
# #         email = request.POST.get('email')
# #
# #         if username:
# #             user.username = username
# #         if email:
# #             user.email = email
# #
# #         user.save()
# #         return JsonResponse({'status': 'updated'})
# #     return JsonResponse({'error': 'Invalid request method'}, status=405)
# #
# # @login_required
# # def delete_user(request, user_id):
# #     if request.method == 'POST':
# #         user = get_object_or_404(User, id=user_id)
# #         if request.user.id != user_id and not request.user.is_staff:
# #             return JsonResponse({'error': 'Unauthorized access'}, status=403)
# #
# #         user.delete()
# #         return JsonResponse({'status': 'deleted'})
# #     return JsonResponse({'error': 'Invalid request method'}, status=405)
# #
# # @csrf_exempt
# # @login_required
# # def location_input(request):
# #     if request.method == 'POST':
# #         form = LocationForm(request.POST)
# #         if form.is_valid():
# #             latitude = form.cleaned_data['latitude']
# #             longitude = form.cleaned_data['longitude']
# #             area = form.cleaned_data['area']
# #
# #             location = UserLocation.objects.create(
# #                 user=request.user,
# #                 latitude=latitude,
# #                 longitude=longitude,
# #                 area=area
# #             )
# #
# #             location_data = preprocess_lat_long_data(latitude, longitude, area)
# #
# #             # # Pass the location data to the LLM
# #
# #             llm_response = []
# #             for i in range(len(location_data)):
# #                 llm_response.append(generate_ai_summary(location_data[i]))
# #
# #             return JsonResponse({
# #                 'status': 'success',
# #                 'location_id': location.id,
# #                 'message': 'Location saved successfully',
# #                 'lat_long_data': location_data,
# #                 'ai_groundwater': llm_response[0],
# #                 'ai_temperature': llm_response[1],
# #                 'ai_runoff': llm_response[2],
# #                 'ai_water_level': llm_response[3]
# #             })
# #         else:
# #             return JsonResponse({'error': form.errors}, status=400)
# #     else:
# #         form = LocationForm()
# #     return render(request, 'location_input.html', {'form': form})
# #
# # @login_required
# # def get_location(request, user_id):
# #     user = get_object_or_404(User, id=user_id)
# #     if request.user.id != user_id and not request.user.is_staff:
# #         return JsonResponse({'error': 'Unauthorized access'}, status=403)
# #
# #     try:
# #         location = UserLocation.objects.filter(user=user).latest('timestamp')
# #         return JsonResponse({
# #             'user_id': user.id,
# #             'username': user.username,
# #             'latitude': location.latitude,
# #             'longitude': location.longitude,
# #             'area': location.area,
# #             'timestamp': location.timestamp
# #         })
# #     except UserLocation.DoesNotExist:
# #         return JsonResponse({'error': 'Location not found'}, status=404)
# 
# 
# from django.http import JsonResponse
# from django.shortcuts import render, redirect, get_object_or_404
# from django.views.decorators.csrf import csrf_exempt
# from django.contrib.auth import authenticate, login
# from django.contrib.auth.decorators import login_required
# from django.contrib.auth.models import User
# from .forms import LocationForm
# from .models import UserLocation
# from .custom_scripts.preprocess_data import preprocess_lat_long_data
# from .custom_scripts.llm_prompt import generate_ai_summary
# import json
# 
# 
# @csrf_exempt
# def create_user(request):
#     if request.method == 'POST':
#         username = request.POST.get('username')
#         email = request.POST.get('email')
#         password = request.POST.get('password')
#         if not username or not email or not password:
#             return JsonResponse({'error': 'Username, email, and password are required'}, status=400)
# 
#         try:
#             user = User.objects.create_user(username=username, email=email, password=password)
#             return JsonResponse({'status': 'success', 'user_id': user.id, 'message': 'User created successfully'})
#         except Exception as e:
#             return JsonResponse({'error': str(e)}, status=500)
# 
#     return JsonResponse({'error': 'Invalid request method'}, status=405)
# 
# 
# @csrf_exempt
# def user_login(request):
#     if request.method == 'POST':
#         data = json.loads(request.body)
#         username = data.get("username")
#         password = data.get("password")
#         if not username or not password:
#             return JsonResponse({'error': 'Username and password are required'}, status=400)
# 
#         user = authenticate(request, username="ABC", password="ABC@abc")
#         if user is not None:
#             login(request, user)
#             return JsonResponse({'status': 'success', 'user_id': user.id})
#         else:
#             return JsonResponse({'error': 'Invalid credentials'}, status=401)
#     return JsonResponse({'error': 'Invalid request method'}, status=405)
# 
# 
# @login_required
# def get_user(request, user_id):
#     user = get_object_or_404(User, id=user_id)
#     if request.user.id != user_id and not request.user.is_staff:
#         return JsonResponse({'error': 'Unauthorized access'}, status=403)
# 
#     return JsonResponse({
#         'id': user.id,
#         'username': user.username,
#         'email': user.email,
#         'date_joined': user.date_joined
#     })
# 
# 
# @login_required
# def update_user(request, user_id):
#     if request.method == 'POST':
#         user = get_object_or_404(User, id=user_id)
#         if request.user.id != user_id and not request.user.is_staff:
#             return JsonResponse({'error': 'Unauthorized access'}, status=403)
# 
#         username = request.POST.get('username')
#         email = request.POST.get('email')
# 
#         if username:
#             user.username = username
#         if email:
#             user.email = email
# 
#         user.save()
#         return JsonResponse({'status': 'updated'})
#     return JsonResponse({'error': 'Invalid request method'}, status=405)
# 
# 
# @login_required
# def delete_user(request, user_id):
#     if request.method == 'POST':
#         user = get_object_or_404(User, id=user_id)
#         if request.user.id != user_id and not request.user.is_staff:
#             return JsonResponse({'error': 'Unauthorized access'}, status=403)
# 
#         user.delete()
#         return JsonResponse({'status': 'deleted'})
#     return JsonResponse({'error': 'Invalid request method'}, status=405)
# 
# 
# @csrf_exempt
# @login_required
# def location_input(request):
#     if request.method == 'POST':
#         data = json.loads(request.body)
#         latitude = float(data.get('latitude'))
#         longitude = float(data.get('longitude'))
#         area = float(data.get('area'))
#         location = UserLocation.objects.create(
#             user=request.user,
#             latitude=latitude,
#             longitude=longitude,
#             area=area
#         )
# 
#         location_data = preprocess_lat_long_data(latitude, longitude, area)
# 
#         # Pass the location data to the LLM
# 
#         llm_response = []
#         for i in range(len(location_data)):
#             llm_response.append(generate_ai_summary(location_data[i], "AIzaSyDqMSWju-9GSygVabOtfZbkc1Y3kCnKnRg"))
# 
#         return JsonResponse({
#             'status': 'success',
#             'location_id': location.id,
#             'message': 'Location saved successfully',
#             'lat_long_data': location_data,
#             'ai_groundwater': llm_response[0],
#             'ai_temperature': llm_response[1],
#             'ai_runoff': llm_response[2],
#             'ai_water_level': llm_response[3]
#         })
#         return JsonResponse({
#             'status': 'success'
#         })
# 
#     else:
#         form = LocationForm()
#     return render(request, 'location_input.html', {'form': form})
# 
# 
# # @login_required
# def get_location(request, user_id):
#     user = get_object_or_404(User, id=user_id)
#     if request.user.id != user_id and not request.user.is_staff:
#         return JsonResponse({'error': 'Unauthorized access'}, status=403)
# 
#     try:
#         location = UserLocation.objects.filter(user=user).latest('timestamp')
#         return JsonResponse({
#             'user_id': user.id,
#             'username': user.username,
#             'latitude': location.latitude,
#             'longitude': location.longitude,
#             'area': location.area,
#             'timestamp': location.timestamp
#         })
#     except UserLocation.DoesNotExist:
#         return JsonResponse({'error': 'Location not found'}, status=404)


from django.http import JsonResponse
from django.shortcuts import render, redirect, get_object_or_404
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import authenticate, login
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from .forms import LocationForm
from .models import UserLocation
from .custom_scripts.preprocess_data import preprocess_lat_long_data
from .custom_scripts.llm_prompt import generate_ai_summary
import json


@csrf_exempt
def create_user(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        email = request.POST.get('email')
        password = request.POST.get('password')
        if not username or not email or not password:
            return JsonResponse({'error': 'Username, email, and password are required'}, status=400)

        try:
            user = User.objects.create_user(username=username, email=email, password=password)
            return JsonResponse({'status': 'success', 'user_id': user.id, 'message': 'User created successfully'})
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)

    return JsonResponse({'error': 'Invalid request method'}, status=405)


@csrf_exempt
def user_login(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        username = data.get("username")
        password = data.get("password")
        if not username or not password:
            return JsonResponse({'error': 'Username and password are required'}, status=400)

        user = authenticate(request, username="ABC", password="ABC@abc")
        if user is not None:
            login(request, user)
            return JsonResponse({'status': 'success', 'user_id': user.id})
        else:
            return JsonResponse({'error': 'Invalid credentials'}, status=401)
    return JsonResponse({'error': 'Invalid request method'}, status=405)


@login_required
def get_user(request, user_id):
    user = get_object_or_404(User, id=user_id)
    if request.user.id != user_id and not request.user.is_staff:
        return JsonResponse({'error': 'Unauthorized access'}, status=403)

    return JsonResponse({
        'id': user.id,
        'username': user.username,
        'email': user.email,
        'date_joined': user.date_joined
    })


@login_required
def update_user(request, user_id):
    if request.method == 'POST':
        user = get_object_or_404(User, id=user_id)
        if request.user.id != user_id and not request.user.is_staff:
            return JsonResponse({'error': 'Unauthorized access'}, status=403)

        username = request.POST.get('username')
        email = request.POST.get('email')

        if username:
            user.username = username
        if email:
            user.email = email

        user.save()
        return JsonResponse({'status': 'updated'})
    return JsonResponse({'error': 'Invalid request method'}, status=405)


@login_required
def delete_user(request, user_id):
    if request.method == 'POST':
        user = get_object_or_404(User, id=user_id)
        if request.user.id != user_id and not request.user.is_staff:
            return JsonResponse({'error': 'Unauthorized access'}, status=403)

        user.delete()
        return JsonResponse({'status': 'deleted'})
    return JsonResponse({'error': 'Invalid request method'}, status=405)


@csrf_exempt
@login_required
def location_input(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        latitude = float(data.get('latitude'))
        longitude = float(data.get('longitude'))
        area = float(data.get('area'))
        location = UserLocation.objects.create(
            user=request.user,
            latitude=latitude,
            longitude=longitude,
            area=area
        )

        location_data = preprocess_lat_long_data(latitude, longitude, area)

        # Pass the location data to the LLM

        llm_response = []
        for i in range(len(location_data)):
            llm_response.append(generate_ai_summary(location_data[i], "AIzaSyDqMSWju-9GSygVabOtfZbkc1Y3kCnKnRg"))

        return JsonResponse({
            'status': 'success',
            'location_id': location.id,
            'message': 'Location saved successfully',
            'lat_long_data': location_data,
            'ai_groundwater': llm_response[0],
            'ai_temperature': llm_response[1],
            'ai_runoff': llm_response[2],
            'ai_water_level': llm_response[3]
        })
        # return JsonResponse({
        #     'status': 'success'
        # })

    else:
        form = LocationForm()
    return render(request, 'location_input.html', {'form': form})


# @login_required
def get_location(request, user_id):
    user = get_object_or_404(User, id=user_id)
    if request.user.id != user_id and not request.user.is_staff:
        return JsonResponse({'error': 'Unauthorized access'}, status=403)

    try:
        location = UserLocation.objects.filter(user=user).latest('timestamp')
        return JsonResponse({
            'user_id': user.id,
            'username': user.username,
            'latitude': location.latitude,
            'longitude': location.longitude,
            'area': location.area,
            'timestamp': location.timestamp
        })
    except UserLocation.DoesNotExist:
        return JsonResponse({'error': 'Location not found'}, status=404)
