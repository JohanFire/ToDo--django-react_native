# django-react_native
 First Django + React Native project

## Install necessary dependencies
all obviusly inside a virtual env
- `pip3 install Django djangorestframework`

---

## Start Django project
`django-admin startproject API`

---

## Make migrations
python manage.py migrate

---

## Start app
`python manage.py startapp api_rest`

---

## Create super user 
`python manage.py createsuperuser`

--- 

# Serializers
after creating [serializer.py](./API/api_rest/serializers.py) with his respective code, we can create an object in Article's table by console
for this:
`python manage.py shell`
```python
    from api_rest.models import Article
    from api_rest.serializers import ArticleSerializer
    from rest_framework.renderers import JSONRenderer
    from rest_framework.parsers import JSONParser
    a = Article(title="Titulo del articulo", description = "esta es la descripcion")
    a.save()

    serializer = ArticleSerializer(a)
    serializer.data
{'title': 'Titulo del articulo', 'description': 'esta es la descripcion'}
    ...
```
At this point I've translated the Article Model into python native data types, dictionaries

## Finalize serialization process
render data into json
```python

    ...
    
    json = JSONRenderer().render(serializer.data)
    json
b'{"title":"Titulo del articulo","description":"esta es la descripcion"}'

    import io
    stream = io.BytesIO(json) 
    data = JSONParser().parse(stream) 
    serializer = ArticleSerializer(data=data)
    serializer.is_valid()
True
    serializer.validated_data
OrderedDict([('title', 'Titulo del articulo'), ('description', 'esta es la descripcion')])
```