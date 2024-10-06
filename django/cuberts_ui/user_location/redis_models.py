from django_redis import get_redis_connection

class RedisModel:
    @classmethod
    def get_connection(cls):
        return get_redis_connection("default")

class User(RedisModel):
    @classmethod
    def create(cls, username, email):
        try:
            print('username', username)
            print('email', email)
            conn = cls.get_connection()
            user_id = conn.incr('user:id')
            user_key = f'user:{user_id}'
            conn.hset(user_key,'username', username)
            conn.hset(user_key, 'email', email)
            return user_id
        except Exception as e:
            print(f"Redis error: {e}")
            raise

    @classmethod
    def get(cls, user_id):
        conn = cls.get_connection()
        user_key = f'user:{user_id}'
        user_data = conn.hgetall(user_key)
        if not user_data:
            return None
        # Decode byte strings to Unicode strings
        return {k.decode('utf-8'): v.decode('utf-8') for k, v in user_data.items()}