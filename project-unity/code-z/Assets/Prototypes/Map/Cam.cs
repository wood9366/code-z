using UnityEngine;

namespace PT.Map
{
    public class Cam : MonoBehaviour
    {
        public Transform _target;
        public float _move_speed = 1;
        public Vector3 _target_offset = Vector3.zero;

        private void Update()
        {
            transform.position = Vector3.Lerp(transform.position, _target.position + _target_offset, _move_speed * Time.deltaTime);
        }
    }
}

