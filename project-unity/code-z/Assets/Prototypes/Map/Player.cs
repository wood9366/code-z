using UnityEngine;

namespace PT.Map
{
    public class Player : MonoBehaviour
    {
        public float _move_speed = 1.0f;
        public float _col_step_len = 0.1f;

        private Vector2 _col_offset = Vector2.zero;
        private Vector2 _col_size = Vector2.one;
        private Rigidbody2D _rb;
        private bool _is_move = false;
        private Vector2 _move_dir = Vector2.zero;

        private void Awake()
        {
            var col = GetComponent<BoxCollider2D>();
            _col_offset = col.bounds.center - transform.position;
            _col_size = col.bounds.size;

            _rb = GetComponent<Rigidbody2D>();
        }

        private void Update()
        {
            _is_move = false;
            _move_dir = Vector2.zero;

            if (Input.GetKey(KeyCode.UpArrow))
            {
                _is_move = true;
                _move_dir += new Vector2(0, 1);
            }
            else if (Input.GetKey(KeyCode.DownArrow))
            {
                _is_move = true;
                _move_dir += new Vector2(0, -1);
            }

            if (Input.GetKey(KeyCode.LeftArrow))
            {
                _is_move = true;
                _move_dir += new Vector2(-1, 0);
            }
            else if (Input.GetKey(KeyCode.RightArrow))
            {
                _is_move = true;
                _move_dir += new Vector2(1, 0);
            }

            if (_is_move)
                _move_dir.Normalize();
        }

        private void FixedUpdate()
        {
            if (_is_move)
                _move(_move_dir);
        }

        private void _move(Vector2 dir)
        {
            var velocity = dir * _move_speed * Time.fixedDeltaTime;
            var velocity_x = Vector2.right * Vector2.Dot(Vector2.right, velocity);
            var velocity_y = Vector2.up * Vector2.Dot(Vector2.up, velocity);
            var move_x = _cal_move_pos(_rb.position, _rb.position + velocity_x, _col_step_len);
            var move_y = _cal_move_pos(_rb.position, _rb.position + velocity_y, _col_step_len);

            _rb.MovePosition(_rb.position + (move_x - _rb.position) + (move_y - _rb.position));
        }

        private Vector2 _cal_move_pos(Vector2 pos, Vector2 target_pos, float step)
        {
            var len = Vector2.Distance(target_pos, pos);

            if (_is_col(target_pos, LayerMask.GetMask("map")))
            {
                var move_pos = pos;
                int num_step = Mathf.CeilToInt(len / step);
                for (int i = 1; i < num_step; i++)
                {
                    var next_pos = Vector2.Lerp(pos, target_pos, i / (float)num_step);
                    if (_is_col(next_pos, LayerMask.GetMask("map")))
                    {
                        break;
                    }
                    else
                        move_pos = next_pos;
                }

                return move_pos;
            }
            else
                return target_pos;
        }

        private Vector2 _cal_move_pos(Vector2 pos, Vector2 dir, float speed, float dt, float step)
        {
            var target_pos = (Vector2)pos + dir * speed * dt;
            return _cal_move_pos(pos, target_pos, step);
        }

        private bool _is_col(Vector2 pos, LayerMask layer)
        {
            return Physics2D.OverlapBox(pos + _col_offset, _col_size, 0, LayerMask.GetMask("map")) != null;
        }
    }
}

