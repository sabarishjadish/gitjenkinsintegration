



public class CountArrayValues {

	public static void main(String[] args) {
		int [] array={1,1,2,5,2,6,5,1};
		int [] temp={0};

		for(int i=0;i<array.length;i++)
		{
			int count=1;
			for(int j=1+i;j<array.length;j++)
			{
				
				if(array[i]==array[j])
				{
					count=count+1;
					if(i+1<array.length)
					{
						i=i+1;
						if(j!=i){
						temp[0]=array[j];
						array[j]=array[i];
						array[i]=temp[0];
						}						
					}	
				}				
			}
			if(i<array.length){
				System.out.println(array[i]+" num of time arive is "+count);
				}else
				{
					i=i-1;
					System.out.println(array[i]+" num of time arive is "+count);
				}			
		}
	}

}