from django.urls import path
from . import views

urlpatterns = [
    path('user/create/', views.create_user, name='create_user'),
    path('user/login/', views.user_login, name='user_login'),
    path('user/<int:user_id>/', views.get_user, name='get_user'),
    path('user/<int:user_id>/update/', views.update_user, name='update_user'),
    path('user/<int:user_id>/delete/', views.delete_user, name='delete_user'),
    path('location-input/', views.location_input, name='location_input'),
    path('get-location/<int:user_id>/', views.get_location, name='get_location'),
]