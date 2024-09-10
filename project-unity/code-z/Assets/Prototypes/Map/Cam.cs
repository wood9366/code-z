using UnityEngine;

namespace PT.Map
{
    public class Cam : MonoBehaviour
    {
        public Transform _target;

        private void Update()
        {
            var pos = transform.position;

            pos.x = _target.position.x;
            pos.y = _target.position.y;

            transform.position = pos;
        }
    }
}

