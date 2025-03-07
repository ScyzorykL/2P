document.querySelector('button').addEventListener('click', function()
{
   let h = parseInt(document.querySelector('#h').value);
   let s = 100;
   const l = 50;

   for(let i=1; i<=5; i++)
   {
      document.querySelector(`#td${i}`).style.backgroundColor = `hsl(${h}, ${s}%, ${l}%)`;
      s -= 20;
   }
});