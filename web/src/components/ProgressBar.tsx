interface ProgressBar{
    progress: number
}

export function ProgressBar(props: ProgressBar) {
    return(
        <div className='h-3 rounded-xl bg-zinc-700 w-full my-4'>
            <div 
              role='progressbar'
              aria-label="Progresso de hábiots completados nesse dia"
              aria-valuenow={props.progress}
              className='h-3 rounded-xl bg-violet-600'
              style={{
                width: `${props.progress}%`
            }}
            />
          </div>
    );
}