from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Post
from .serializers import PostSerializer

@api_view(['GET', 'POST'])  # Fix: You had ['GET', ['POST']]
def post_list_create(request):
    if request.method == 'GET':
        posts = Post.objects.all().order_by('-created_at')  # Fix: _created_at should be -created_at
        serializer = PostSerializer(posts, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = PostSerializer(data=request.data)  # Fix: colon (:) was wrong
        if serializer.is_valid():  # Fix: isvalid → is_valid
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)


@api_view(['GET', 'PUT', 'DELETE'])  # 👈 Add DELETE here
def post_detail_update(request, pk):
    try:
        post = Post.objects.get(pk=pk)
    except Post.DoesNotExist:
        return Response({'error': 'Post not found'}, status=404)

    if request.method == 'GET':
        serializer = PostSerializer(post)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = PostSerializer(post, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)

    elif request.method == 'DELETE':  # 👈 Add this block
        post.delete()
        return Response({'message': 'Post deleted successfully.'}, status=204)
