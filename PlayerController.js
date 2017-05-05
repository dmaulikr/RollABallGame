public var speed: float;
private var rb: Rigidbody;
private var count: int;
public var countText: GUIText;

function Start (){
	rb = GetComponent.<Rigidbody>();
	count = 0;
	SetCountText();

}
function FixedUpdate ()
{
	var moveHor = Input.GetAxis("Horizontal");
	var moveVer = Input.GetAxis("Vertical");
	var movement = new Vector3(moveHor,0, moveVer);
	rb.AddForce(movement*speed);
}


function OnTriggerEnter(other : Collider)
{
	if (other.gameObject.CompareTag("Pick Up"))
	{
		other.gameObject.SetActive(false);
		count = count + 1;
		SetCountText();

	}
}

function SetCountText()
{
	countText.text = "Count:" + count.ToString();

}
