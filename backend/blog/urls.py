from django.urls import path
from . import views


urlpatterns = [
    path('posts/', views.post_list_create, name='post-list-create'),
     path('posts/<int:pk>/', views.post_detail_update, name='post-detail-update'),
]