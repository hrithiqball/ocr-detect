### To run backend

```zsh
# initialize virtual environment
python3 -m venv venv

# activate virtual environment
source /bin/activate

# install dependencies
pip install -r requirements.txt

# run the project
python app.py
```

### To run frontend

```zsh
# install dependencies
pnpm install

# run the project
pnpm dev
```

### Install CUDA Toolkit for WSL2

> Add NVIDIA package repositories

```zsh
sudo apt-key adv --fetch-keys https://developer.download.nvidia.com/compute/cuda/repos/wsl-ubuntu/x86_64/3bf863cc.pub
sudo sh -c 'echo "deb https://developer.download.nvidia.com/compute/cuda/repos/wsl-ubuntu/x86_64 /" > /etc/apt/sources.list.d/cuda.list'
```

> Install CUDA Toolkit

```zsh
sudo apt-get update
sudo apt-get install -y cuda
```

### Install cuDNN

[cuDNN](https://developer.nvidia.com/cudnn-downloads?target_os=Linux&target_arch=x86_64&Distribution=Debian&target_version=12&target_type=deb_local)

https://docs.nvidia.com/cuda/wsl-user-guide/index.html
